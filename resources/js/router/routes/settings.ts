const { page } = require("./index");
export default [
    {
        name: "settings",
        path: "/nastaveni",
        component: page("settings/index.vue"),
        children: [
            {
                name: "ChangePassword",
                path: "zmenit-heslo",
                component: page("settings/ChangePassword.vue")
            },
            {
                name: "ChangeContact",
                path: "zmena-kontaktni-udaju",
                component: page("settings/ChangeContact.vue")
            }
        ]
    },
    {
        name: "invoice",
        path: "/fakturacni-udaje",
        component: page("invoice/AddInvoice.vue")
    }
];
