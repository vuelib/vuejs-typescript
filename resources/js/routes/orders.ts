const Orders = [
    {
        name: "Orders",
        path: "/objednavky",
        component: () => import("../components/order/allOrders.vue"),
        meta: {
            requiresAuth: true,
            requiredInvoice: true
        },
        children: [
            {
                name: "ShowOrder",
                path: ":id",
                component: () => import("../components/order/showOrder.vue"),
                props: true
            }
        ]
    },
    {
        name: "objednat",
        path: "/objednat-zbozi",
        component: () => import("../components/order/addOrder.vue"),
        meta: { requiresAuth: true, requiredInvoice: true }
    },
    {
        name: "EditOrder",
        path: "/objednavka/:id/upravit",
        component: () => import("../components/order/editOrder.vue"),
        props: true,
        meta: {
            requiresAuth: true,
            requiredInvoice: true
        }
    }
];

export default Orders;
