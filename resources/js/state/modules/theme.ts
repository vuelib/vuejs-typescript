interface theme {
    theme: String;
}

export default {
    state: () => ({
        theme: "theme-light"
    }),
    getters: {
        theme(state: theme): String {
            return state.theme;
        }
    },
    mutations: {
        setTheme(state: theme, theme: String) {
            state.theme = theme;
        }
    }
};
