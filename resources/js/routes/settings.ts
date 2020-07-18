const Settings = [
    {
        name: "settings",
        path: "/nastaveni",
        component: () => import("../components/settings/index.vue"),
        meta: {
            requiresAuth: true,
            requiredInvoice: true
        },
        children: [
            {
                name: "ChangePassword",
                path: "zmenit-heslo",
                component: () =>
                    import("../components/settings/ChangePassword.vue")
            },
            {
                name: "ChangeContact",
                path: "zmena-kontaktni-udaju",
                component: () =>
                    import("../components/settings/ChangeContact.vue")
            }
        ]
    },
    {
        name: "invoice",
        path: "/fakturacni-udaje",
        component: () => import("../components/invoice/AddInvoice.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

export default Settings;
