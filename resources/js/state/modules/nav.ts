interface nav {
    navbarlinks: Array<String>;
    loogedInlinks: Array<String>;
    sidebarlinks: Array<String>;
}

export default {
    state: () => ({
        navbarlinks: [
            { name: "Zboží", route: "zbozi" },
            { name: "Kontakt", route: "kontakt" },
            { name: "Přihlásit", route: "login" }
        ],
        loggedInlinks: [
            { name: "Zboží", route: "zbozi" },
            { name: "Kontakt", route: "kontakt" }
        ],
        sidebarlinks: [
            // { name: "Zboží", route: "zbozi" },
            { name: "Objednat zboží", route: "objednat", fa: "fa-plus-circle" },
            { name: "Objednávky", route: "Orders", fa: "fa-tasks" },
            { name: "Nastavení", route: "settings", fa: "fa-cogs" }
        ]
    }),
    getters: {
        navbarlinks(state: nav): Array<String> {
            return state.navbarlinks;
        },
        loggedInlinks(state) {
            return state.loggedInlinks;
        },
        sidebarlinks(state: nav): Array<String> {
            return state.sidebarlinks;
        }
    }
};
