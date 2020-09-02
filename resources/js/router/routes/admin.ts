const { page } = require("./index");
export default [
    {
        name: "admin",
        path: "/upravy",
        component: page("admin/index.vue"),
        children: [
            {
                name: "createCategory",
                path: "vytvorit-kategorii",
                component: page("category/createCategory.vue")
            },
            {
                name: "editCategory",
                path: "upravit-kategorii/:id",
                component: page("category/editCategory.vue"),
                props: true
            },
            {
                name: "createProduct",
                path: "vytvorit-produkt",
                component: page("product/createProduct.vue")
            }
        ]
    },
    {
        name: "showUsers",
        path: "/prehled-zakazniku",
        component: page("admin/user/showUsers.vue"),
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        }
    },
    {
        name: "showAllOrders",
        path: "/prehled-objednavek",
        component: page("admin/order/allOrders.vue"),
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        }
    },
    {
        name: "user",
        path: "/uzivatel/:id",
        component: page("admin/user/userProfile.vue"),
        props: true,
        meta: {
            requiresAdmin: true,
            requiresAuth: true
        },
        children: [
            {
                name: "showOrder",
                path: "objednavka/:idc",
                component: page("admin/order/showOrder.vue"),
                props: true
            },
            {
                name: "addInvoice",
                path: "pridat-fakturacni-udaje",
                component: page("admin/user/addInvoice.vue"),
                props: true
            },
            {
                name: "changeInvoice",
                path: "zmena-fakturacni-udaje",
                component: page("admin/user/changeInvoice.vue"),
                props: true
            },
            {
                name: "addOrder",
                path: "pridat-objednavku",
                component: page("admin/order/addOrder.vue"),
                props: { default: true, hide: true }
            },
            {
                name: "editOrder",
                path: "objednavka/:idc/upravit",
                component: page("admin/order/editOrder.vue"),
                props: true
            }
        ]
    }
];
