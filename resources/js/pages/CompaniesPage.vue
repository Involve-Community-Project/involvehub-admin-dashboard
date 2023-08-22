<script lang="ts" setup>
import IHTable from '../components/IHTable.vue';
import IHButton from '../components/atoms/IHButton.vue';
import { inject, onMounted, ref } from 'vue';
import { IconPlus } from '@iconify-prerendered/vue-bi';
import { useRouter, useRoute } from 'vue-router';
import { type Emitter, type EventType } from 'mitt';
import AddCompanyModal from '../components/AddCompanyModal.vue';
import { getCompanies } from '../api/companies';

const route = useRoute();
const router = useRouter();
const companies = ref({});

const emitter: Emitter<Record<EventType, unknown>> | undefined =
    inject('emitter');

let companyModalOpen = ref(false);

emitter?.on('companies:add', () => {
    companyModalOpen.value = true;
});

onMounted(async () => {
    if (route.query.action === 'add') {
        companyModalOpen.value = true;
    }

    await getCompanies().then((response) => {
        companies.value = response.data;
    });
});
</script>
<template>
    <div class="w-full px-3 py-3 border-b dark:border-surface-700 mb-6">
        <h1 class="text-3xl font-bold">Companies</h1>
    </div>

    <IHTable :data="companies">
        <template #header-action>
            <IHButton
                class="whitespace-nowrap"
                @click="() => (companyModalOpen = true)"
            >
                <template #icon>
                    <IconPlus class="w-auto h-6 font-bold" />
                </template>
                Add Company
            </IHButton>
        </template>
    </IHTable>

    <AddCompanyModal
        v-model:open="companyModalOpen"
        @onClose="
            () => {
                router.replace({ query: {} });
            }
        "
    ></AddCompanyModal>
</template>
