import * as types from "../mutations-types";
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
        [types.SAVE_THEME](state, theme) {
            state.theme = theme;
        }
    }
};
