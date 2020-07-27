import axios from "axios";
export default {
    state: () => ({
        token: localStorage.getItem("access_token") || null,
        user: {},
        invoice: localStorage.getItem("invoice") || null,
        userProfile: []
    }),
    getters: {
        loggedIn(state) {
            return state.token !== null;
        },
        invoice(state) {
            return state.invoice !== null;
        },
        userProfile(state) {
            return state.userProfile;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },
        getUserProfile(state, userProfile) {
            state.userProfile = userProfile;
        },
        getUser(state, user) {
            state.user = user;
            if (user.invoice) {
                localStorage.setItem("invoice", "true");
                state.invoice = user.invoice;
            }
        },
        addInvoice(state, invoice) {
            state.user.invoice = invoice;
            state.invoice = invoice;
        }
    },
    actions: {
        retrieveName(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            return new Promise((resolve, reject) => {
                axios
                    .get("/user")
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("register", {
                        phone: data.phone,
                        email: data.email,
                        password: data.password,
                        confirm_password: data.confirm_password
                    })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
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
        destroyToken({ state, getters, commit }) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + state.token;

            if (getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/logout")
                        .then(response => {
                            localStorage.removeItem("access_token");
                            commit("destroyToken");
                            resolve(response);
                        })
                        .catch(error => {
                            localStorage.removeItem("access_token");
                            commit("destroyToken");
                            reject(error);
                        });
                });
            }
        },
        retrieveToken({ commit, dispatch }, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("login", credentials)
                    .then(response => {
                        const token = response.data.access_token;

                        localStorage.setItem("access_token", token);
                        commit("retrieveToken", token);
                        // dispatch("getUser");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        fetchUserProfile({ state, commit }, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + state.token;

                axios
                    .get(`user/${id}`)
                    .then(response => {
                        resolve(response);
                        commit("getUserProfile", response.data);
                        commit("fetchOrders", response.data.orders);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
        },
        getUser({ state, commit }) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + state.token;

            axios
                .post("user")
                .then(response => {
                    commit("getUser", response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
