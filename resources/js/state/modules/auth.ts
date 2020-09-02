import axios from "axios";
import Cookies from "js-cookie";
import * as types from "../mutations-types";
export default {
    state: () => ({
        user: {},
        token: Cookies.get("token") || null
    }),
    getters: {
        loggedIn(state) {
            return state.token !== null;
        },
        admin(state) {
            if (state.user.role) return state.user.role.name === "admin";
            return false;
        },
        invoice(state) {
            return state.invoice !== null;
        },
        token(state) {
            return state.token;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        [types.SAVE_TOKEN](state, token) {
            state.token = token;
        },
        [types.LOGOUT](state) {
            state.token = null;
            state.user = null;

            Cookies.remove("token");
        },

        [types.FETCH_USER_SUCCESS](state, { user }) {
            state.user = user;
        },
        [types.FETCH_USER_FAILURE](state, { user }) {
            state.user = null;
            state.token = null;

            Cookies.remove("token");
        }
    },
    actions: {
        forgotPassword(context, user) {
            return new Promise((resolve, reject) => {
                axios
                    .post("password/email", user)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        resetPassword(context, user) {
            return new Promise((resolve, reject) => {
                axios
                    .post("password/reset", user)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        async logout({ commit }) {
            try {
                const { data } = await axios.post("logout");
            } catch (e) {}

            commit(types.LOGOUT);
        },
        async retrieveToken({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("login", credentials)
                    .then(response => {
                        const token = response.data.access_token;
                        Cookies.set("token", token);
                        commit(types.SAVE_TOKEN, token);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        async fetchUser({ commit }) {
            try {
                const { data } = await axios.post("user");
                commit(types.FETCH_USER_SUCCESS, { user: data });
            } catch (e) {
                commit(types.FETCH_USER_FAILURE);
            }
        }
    }
};
