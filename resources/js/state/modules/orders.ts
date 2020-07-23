import axios from "axios";
export default {
    state: () => ({
        orders: [],
        order: { id: 0 }
    }),
    getters: {
        ordersFilter(state) {
            return Array.isArray(state.orders) && state.orders.length;
        },
        orders(state) {
            return state.orders;
        },
        order(state) {
            return state.order;
        }
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        },
        setOrder(state, order) {
            state.order = order;
        },
        addOrder(state, order) {
            state.order = order;
            state.orders.unshift({
                id: order.id,
                created_at: order.created_at,
                amounts: order.amounts,
                user_id: order.user_id,
                status: "rozpracovaná"
            });
        },
        confirmOrder(state, data) {
            state.order.status = "potvrzena";
            state.order.description = data.description;
            const index = state.orders.findIndex(item => item.id == data.id);
            state.orders.splice(index, 1, state.order);
        },
        deleteOrder(state, id) {
            const index = state.orders.findIndex(item => item.id == id);
            state.orders.splice(index, 1);
            state.order = [];
        },
        setAmount(state, amount) {
            const amounts = [...state.order.amounts];
            const index = amounts.findIndex(i => i == amount);
            amounts[index] = amount;
            state.order.amounts = amounts;
        },
        unsetAmount(state, amount) {
            const amounts = [...state.order.amounts];
            const index = amounts.findIndex(i => i == amount);
            amounts.splice(index, 1);
            state.order.amounts = amounts;
        }
    },
    actions: {
        fetchOrders({ rootState, commit }, page) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;

                axios
                    .get("/order?page=" + page)
                    .then(res => {
                        commit("setOrders", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        fetchOrder({ rootState, commit }, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;

                axios
                    .get(`order/${id}`)
                    .then(res => {
                        commit("setOrder", res.data);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        confirmOrder(context, data) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;
            axios
                .post(`order/${data.id}/confirm`, data)
                .then(response => {
                    context.commit("confirmOrder", data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteOrder({ rootState, commit }, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;

                axios
                    .delete(`order/${id}`)
                    .then(res => {
                        commit("deleteOrder", id);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        updateAmount({ rootState, commit }, amount) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;
                axios
                    .put(`amount/${amount.id}`, amount)
                    .then(res => {
                        commit("setAmount", amount);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        deleteAmount({ rootState, commit }, amount) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + rootState.auth.token;

                axios
                    .delete(`amount/${amount.id}`)
                    .then(res => {
                        commit("unsetAmount", amount);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};
