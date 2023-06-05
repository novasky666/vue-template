import Vue from "vue";
import "./d2.js";
import "../dev/qcs/u.js";

import i18n from "@/i18n/i18n.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@/styles/index.scss"; // global css
import "@/icons"; // icon
import "virtual:svg-icons-register"; // svg-register
import "@/permission"; // permission control

import { setupProdMockServer } from "@/utils/mockProdServer";
setupProdMockServer(import.meta.env.VITE_APP_BASE_API);

Vue.use(ElementUI, { size: "mini" });

Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router,
	store,
	i18n,
	render: (h) => h(App),
});
