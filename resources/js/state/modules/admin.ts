import axios from "axios";
export default {
    state: () => ({
        allUsers: {},
        allOrders: {},
        filterUsers: "all",
        filterOrders: "%%",
        currUser: [],
        uOrders: []
    }),
    getters: {
        allOrders(state) {
            return state.allOrders;
        },
        allUsers(state) {
            return state.allUsers;
        },
        filterUsers(state) {
            return state.filterUsers;
        },
        filterOrders(state) {
            return state.filterOrders;
        },
        currUser(state) {
            return state.currUser;
        },
        uOrders(state) {
            return state.uOrders;
        }
    },
    mutations: {
        setAllOrders(state, allOrders) {
            state.allOrders = allOrders;
        },
        allUsers(state, allUsers) {
            state.allUsers = allUsers;
        },
        setFilterUsers(state, filter) {
            state.filterUsers = filter;
        },
        setFilterOrders(state, filter) {
            state.filterOrders = filter;
        },
        setcurrUser(state, user) {
            state.currUser = user;
        },
        setOrders(state, orders) {
            state.uOrders = orders;
        },
        adduOrders(state, order) {
            const orders = state.uOrders;
            state.uOrders = { order, ...orders };
        }
    },
    actions: {
        fetchOrderss({ rootState, commit }, page) {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `orders?filter=${rootState.admin.filterOrders}&page=${page}`
                    )
                    .then(res => {
                        commit("setAllOrders", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        fetchUsers({ rootState, commit }, page) {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `user?filter=${rootState.admin.filterUsers}&page=${page}`
                    )
                    .then(res => {
                        commit("allUsers", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        fetchCurrUser({ rootState, commit }, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;
                axios
                    .get(`user/${id}`)
                    .then(res => {
                        resolve(res);
                        commit("setcurrUser", res.data);
                    })
                    .catch(error => {
                        reject(error);
                    });
                axios
                    .get(`orders/${id}`)
                    .then(res => {
                        resolve(res);
                        commit("setOrders", res.data);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
