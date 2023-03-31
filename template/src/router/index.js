import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import exampleRouter from "./exampleRouter";

const createRouter = () =>
	new Router({
		// mode: 'history', // require service support
		scrollBehavior: () => ({ y: 0 }),
		routes: [
			...exampleRouter,
			{ path: "*", redirect: "/404", hidden: true },
		],
	});

const router = createRouter();

export function resetRouter() {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher;
}

export default router;
