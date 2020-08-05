const Admin = [
    {
        name: "admin",
        path: "/upravy",
        component: () => import("../components/admin/index.vue"),
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        },
        children: [
            {
                name: "createCategory",
                path: "vytvorit-kategorii",
                component: () =>
                    import("../components/category/createCategory.vue")
            },
            {
                name: "editCategory",
                path: "upravit-kategorii/:id",
                component: () =>
                    import("../components/category/editCategory.vue"),
                props: true
            },
            {
                name: "createProduct",
                path: "vytvorit-produkt",
                component: () =>
                    import("../components/product/createProduct.vue")
            }
        ]
    },
    {
        name: "showUsers",
        path: "/prehled-zakazniku",
        component: () => import("../components/admin/user/showUsers.vue"),
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        }
    },
    {
        name: "showAllOrders",
        path: "/prehled-objednavek",
        component: () => import("../components/admin/order/allOrders.vue"),
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        }
    },
    {
        name: "user",
        path: "/uzivatel/:id",
        component: () => import("../components/admin/user/userProfile.vue"),
        props: true,
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        },
        children: [
            {
                name: "showOrder",
                path: "objednavka/:idc",
                component: () =>
                    import("../components/admin/order/showOrder.vue"),
                props: true
            },
            {
                name: "addInvoice",
                path: "pridat-fakturacni-udaje",
                component: () =>
                    import("../components/admin/user/addInvoice.vue"),
                props: true
            },
            {
                name: "changeInvoice",
                path: "zmena-fakturacni-udaje",
                component: () =>
                    import("../components/admin/user/changeInvoice.vue"),
                props: true
            },
            {
                name: "addOrder",
                path: "pridat-objednavku",
                component: () =>
                    import("../components/admin/order/addOrder.vue"),
                props: { default: true, hide: true }
            },
            {
                name: "editOrder",
                path: "objednavka/:idc/upravit",
                component: () =>
                    import("../components/admin/order/editOrder.vue"),
                props: true
            }
        ]
    }
];

export default Admin;
