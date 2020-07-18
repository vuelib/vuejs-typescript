const Category = [
    {
        name: "zbozi",
        path: "/zbozi",
        component: () => import("../components/category/allCategories.vue"),
        props: true,
        meta: {
            title: "Šotola Miroslav - Zboží",
            metaTags: [
                {
                    name: "description",
                    content: "Hlavní stránka"
                },
                {
                    property: "og:description",
                    content: "Hlavní stránka."
                }
            ]
        },
        children: [
            {
                name: "category_show",
                path: ":id/:slug?",
                component: () =>
                    import("../components/category/showCategory.vue"),
                props: true
            }
        ]
    }
];

export default Category;
