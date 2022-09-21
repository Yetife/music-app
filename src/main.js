import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import { registerSW} from "virtual:pwa-register";
import Icon from './directives/icon'
import GlobalComponents from './includes/_global'
import progressbar from "./includes/progressbar";

import "./assets/base.css";
import "./assets/main.css";
import "nprogress/nprogress.css"

registerSW({immediate: true});

progressbar(router);

let app;

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(GlobalComponents)
        app.directive("icon", Icon)

        app.mount("#app");
    }
});