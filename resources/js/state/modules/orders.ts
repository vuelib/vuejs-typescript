import axios from "axios";
export default {
    state: () => ({
        orders: [],
        order: { id: 0 },
        orderItems: []
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
        },
        orderItems(state) {
            return state.orderItems;
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
        orderItems(state, item) {
            console.log(item);
        },
        updateOrderItem(state, amount) {
            const index = state.order.amounts.findIndex(
                item => item.id == amount.id
            );
            state.orders.amounts.splice(index, 1, amount);
        },
        deleteOrderItem(state, id) {
            const index = state.order.amounts.findIndex(item => item.id == id);
            state.order.amounts.splice(index, 1);
        }
    },
    actions: {
        fetchOrders(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            axios
                .get("/orders")
                .then(response => {
                    context.commit("setOrders", response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        fetchOrder(context, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + context.state.token;

                axios
                    .get(`order/${id}`)
                    .then(response => {
                        context.commit("setOrder", response.data.data);
                        resolve(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
        },
        deleteOrder(context, id) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            axios
                .delete(`order/${id}`)
                .then(response => {
                    context.commit("deleteOrder", id);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        updateOrderItem(context, amount) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;
            axios
                .put(`amount/${amount.id}`, amount)
                .then(response => {
                    context.commit("updateOrderItem", amount);
                })
                .catch(error => {
                    console.log(error);
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
        deleteOrderItem(context, id) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            axios
                .delete(`amount/${id}`)
                .then(response => {
                    context.commit("deleteOrderItem", id);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
