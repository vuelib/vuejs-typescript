import axios from "axios";
export default {
    state: () => ({
        allUsers: {},
        allOrders: {},
        filter: "all"
    }),
    getters: {
        allOrders(state) {
            return state.allOrders;
        },
        allUsers(state) {
            return state.allUsers;
        },
        allUsersFiltered(state) {
            if (state.filter == "all") {
                return state.allUsers;
            } else if (state.filter == "withinvoice") {
                return state.allUsers.filter(user => user.invoice);
            } else if (state.filter == "withoutinvoice") {
                return state.allUsers.filter(user => !user.invoice);
            }
            return state.allUsers;
        }
    },
    mutations: {
        allOrders(state, allOrders) {
            state.allOrders = allOrders;
        },
        allUsers(state, allUsers) {
            state.allUsers = allUsers;
        },
        updateFilter(state, filter) {
            state.filter = filter;
        }
    },
    actions: {
        allOrders(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`allorders`)
                    .then(res => {
                        context.commit("allOrders", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        allUsers(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`allusers`)
                    .then(res => {
                        context.commit("allUsers", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
