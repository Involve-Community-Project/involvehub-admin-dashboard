<script lang="ts" setup>
import { computed, ref } from 'vue';
import IHButton from './atoms/IHButton.vue';
import IHPager from './atoms/IHPager.vue';

// Received data from API
// {
//     "current_page": 1,
//     "data": [
//         {
//             "id": 1,
//             "dbname": "customer1",
//             "username": "customer1-admin",
//             "name": "Customer 1",
//             "email": "customer1@test.com"
//         }
//     ],
//     "first_page_url": "/?page=1",
//     "from": 1,
//     "last_page": 1,
//     "last_page_url": "/?page=1",
//     "links": [
//         {
//             "url": null,
//             "label": "&laquo; Previous",
//             "active": false
//         },
//         {
//             "url": "/?page=1",
//             "label": "1",
//             "active": true
//         },
//         {
//             "url": null,
//             "label": "Next &raquo;",
//             "active": false
//         }
//     ],
//     "next_page_url": null,
//     "path": "/",
//     "per_page": 5,
//     "prev_page_url": null,
//     "to": 1,
//     "total": 1
// }

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const currentData = computed(() => {
    return searchTerm.value
        ? props.data.data.filter((item: any) => {
              return Object.keys(item).some((key) => {
                  return (
                      String(item[key])
                          .toLowerCase()
                          .indexOf(searchTerm.value.toLowerCase()) > -1
                  );
              });
          })
        : props.data.data;
});

const searchTerm = ref('');

const search = (value: string) => {
    searchTerm.value = value;
};

// const header = computed(() => {
//     return Object.keys(currentData).map((key) => {
//         return {
//             text: key,
//             filterable: true,
//             value: key,
//         };
//     });
// });

const header = ref([
    {
        text: 'Company name',
        filterable: true,
        value: 'name',
    },
    {
        text: 'Email',
        filterable: true,
        value: 'email',
    },
    {
        text: '# Event created',
        filterable: true,
        value: 'events',
    },
    {
        text: '# Donations',
        filterable: true,
        value: 'donations',
    },
]);

// const headerAction = ref([
//     {
//         text: 'Add new',
//         icon: 'plus',
//         component: IHButton,
//         props: {
//             variant: 'primary',
//             size: 'small',
//         },
//     },
// ]);

// // Typescript: dinamicly define object type based on header value keys
// type RowObjectType = {
//     [key in (typeof header.value)[number]['value']]: string;
// };

// const data = ref([
//     {
//         name: 'Customer 1',
//         email: 'customer1@test.com',
//         events: '0',
//         donations: '0',
//     },
//     {
//         name: 'Test example',
//         email: 'test@email.com',
//         events: '10',
//         donations: '10',
//     },
// ]);

type GenericObject = { [key: string]: any };

const getRowObject = (item: GenericObject): GenericObject => {
    const row: GenericObject = {};
    header.value.forEach((headerItem) => {
        // Typescript: get object key from string value, if not found return null
        const key = Object.keys(item).find((key) => key === headerItem.value);
        if (key) {
            row[key] = item[key] ?? null;
        }
    });

    return row;
};

let currentPage = ref(1);
</script>
<template>
    <div class="w-full">
        <div
            class="w-full flex flex-col sm:flex-row gap-3 justify-between my-4"
        >
            <slot name="header-action">
                <div></div>
            </slot>
            <input
                type="text"
                class="input sm:max-w-xs"
                placeholder="Search"
                v-on:input="search(($event?.target as HTMLInputElement)?.value)"
            />
        </div>
        <div
            class="w-full relative rounded-lg outline outline-1 outline-surface-900/20 dark:outline-surface-50/20"
        >
            <div class="w-full overflow-x-auto rounded-lg relative">
                <table class="w-full">
                    <thead
                        class="bg-secondary-50 text-lg text-on-secondary-400"
                    >
                        <tr class="">
                            <th
                                class="px-3 py-4 text-left whitespace-nowrap"
                                v-for="item in header"
                                :key="item.value"
                            >
                                {{ item.text }}
                            </th>
                            <th class="px-3 py-4 text-left whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="border-b border-surface-900/20 dark:border-surface-50/20"
                            tabindex="0"
                            v-for="row in currentData"
                            :key="row.name"
                        >
                            <td
                                class="px-3 py-4"
                                v-for="item in getRowObject(row)"
                                :key="item"
                            >
                                {{ item }}
                            </td>
                            <td class="px-3 py-4">
                                <slot name="row-action">
                                    <!-- <template v-for="item in headerAction">
                                    <component
                                        :is="item.component"
                                        :key="item.text"
                                        v-bind="item.props"
                                    >
                                        {{ item.text }}
                                    </component>
                                </template> -->
                                </slot>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="w-full p-6 overflow-hidden">
                <IHPager
                    :pages="props.data.total"
                    v-model:currentPage="currentPage"
                    :max-pager-items="12"
                ></IHPager>
            </div>
        </div>
    </div>
</template>
