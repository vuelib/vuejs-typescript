const { page } = require("./index");
export default [
    {
        name: "zbozi",
        path: "/zbozi",
        component: page("category/allCategories.vue"),
        props: true,
        children: [
            {
                name: "category_show",
                path: ":id/:slug?",
                component: page("category/showCategory.vue"),
                props: true
            }
        ]
    }
];
