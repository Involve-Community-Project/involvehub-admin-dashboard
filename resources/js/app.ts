import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import mitt from 'mitt';

// import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

import App from './App.vue';
import router from './router';

const emitter = mitt();
const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(autoAnimatePlugin);
app.provide('emitter', emitter);

app.mount('#app');
