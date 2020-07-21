const BasicRoutes = [
    {
        name: "home",
        path: "/",
        component: () => import("../components/lib/Domu.vue"),
        meta: {
            title: "Šotola Miroslav - Úvodní stránka",
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
        }
    },
    {
        name: "kontakt",
        path: "/kontakt",
        component: () => import("../components/contact/index.vue"),
        meta: {
            title: "Šotola Miroslav - Kontakt",
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
        }
    },
    {
        name: "kestazeni",
        path: "/ke-stazeni",
        component: () => import("../components/lib/kestazeni.vue")
    }
];

export default BasicRoutes;
