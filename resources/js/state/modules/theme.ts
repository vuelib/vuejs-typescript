interface theme {
    theme: String;
}

export default {
    state: () => ({
        theme: ""
    }),
    getters: {
        theme(state: theme): String {
            return state.theme;
        }
    },
    mutations: {
        setTheme(state, theme) {
            console.log(theme);
            state.theme = theme;
        }
    }
};
