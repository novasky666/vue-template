import Layout from "@/layout/index.vue";
export default [
	{
		path: "/login",
		component: () => import("@/views/login/index.vue"),
		hidden: true,
	},

	{
		path: "/404",
		component: () => import("@/views/404.vue"),
		hidden: true,
	},

	{
		path: "/",
		component: Layout,
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				name: "首页",
				component: () => import("@/views/dashboard/index.vue"),
				meta: { title: "首页", icon: "dashboard" },
			},
		],
	},

	{
		path: "/example",
		component: Layout,
		redirect: "/example/table",
		name: "Example",
		meta: { title: "Example", icon: "el-icon-s-help" },
		children: [
			{
				path: "table",
				name: "Table",
				component: () => import("@/views/table/index.vue"),
				meta: { title: "Table", icon: "table" },
			},
			{
				path: "tree",
				name: "Tree",
				component: () => import("@/views/tree/index.vue"),
				meta: { title: "Tree", icon: "tree" },
			},
		],
	},

	{
		path: "/form",
		component: Layout,
		children: [
			{
				path: "index",
				name: "Form",
				component: () => import("@/views/form/index.vue"),
				meta: { title: "Form", icon: "form" },
			},
		],
	},
];
