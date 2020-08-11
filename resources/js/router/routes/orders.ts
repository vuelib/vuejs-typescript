const { page } = require("./index");
export default [
    {
        name: "Orders",
        path: "/objednavky",
        component: page("order/allOrders.vue"),
        children: [
            {
                name: "ShowOrder",
                path: ":id",
                component: page("order/showOrder.vue"),
                props: true
            }
        ]
    },
    {
        name: "objednat",
        path: "/objednat-zbozi",
        component: page("order/addOrder.vue"),
        meta: { requiresAuth: true, requiredInvoice: true }
    },
    {
        name: "EditOrder",
        path: "/objednavka/:id/upravit",
        component: page("order/editOrder.vue"),
        props: true
    }
];
