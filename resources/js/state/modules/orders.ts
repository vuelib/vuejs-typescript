import axios from "axios";
import * as types from "../mutations-types";

export default {
    state: () => ({
        orders: {
            data: []
        },
        order: []
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
        [types.FETCH_ORDERS](state, orders) {
            state.orders = orders;
        },
        [types.FETCH_ORDER](state, { order }) {
            state.order = order;
        },
        [types.ADD_ORDER](state, order) {
            const orders = [order, ...state.orders.data];
            if (state.orders.data.length === 10) orders.splice(-1);
            state.orders.data = orders;
            state.order = order;
        },
        [types.CONFIRM_ORDER](state, order) {
            const orders = [...state.orders.data];
            const index = orders.findIndex(o => o.id == order.id);
            orders[index] = order;
            state.orders.data = orders;
            state.order = order;
        },
        [types.DELETE_ORDER](state, order) {
            const orders = [...state.orders.data];
            const index = orders.findIndex(o => o.id == order.id);
            orders.splice(index, 1);
            state.orders.data = orders;
            state.order = orders;
        },
        [types.SAVE_AMOUNT](state, amount) {
            const amounts = [...state.order.amounts];
            const index = amounts.findIndex(i => i == amount);
            amounts[index] = amount;
            state.order.amounts = amounts;
        },
        [types.DELETE_AMOUNT](state, amount) {
            const amounts = [...state.order.amounts];
            const index = amounts.findIndex(i => i == amount);
            amounts.splice(index, 1);
            state.order.amounts = amounts;
        }
    },
    actions: {
        async fetchOrders({ commit }, page) {
            try {
                const { data } = await axios.get(`order?page=${page}`);
                commit(types.FETCH_ORDERS, data);
            } catch (e) {
                console.log(e);
            }
        },
        async fetchOrder({ commit }, id) {
            try {
                const { data } = await axios.get(`order/${id}`);
                commit(types.FETCH_ORDER, { order: data });
            } catch (e) {
                console.log(e);
            }
        },
        async addOrder({ commit }, order) {
            try {
                const { data } = await axios.post("order", order);
                commit(types.ADD_ORDER, { order: data });
            } catch (e) {
                console.log(e);
            }
        },
        async confirmOrder({ commit }, order) {
            try {
                const { data: resOrder } = await axios.put(
                    `order/${order.id}/confirm`,
                    order
                );
                commit(types.CONFIRM_ORDER, resOrder);
            } catch (e) {
                console.log(e);
            }
        },
        async deleteOrder({ commit }, order) {
            try {
                await axios.delete(`amount/${order.id}`);
                commit(types.DELETE_ORDER, order);
            } catch (e) {
                console.log(e);
            }
        },
        async updateAmount({ commit }, amount) {
            try {
                const { data } = await axios.put(`amount/${amount.id}`, amount);
                commit(types.SAVE_AMOUNT, data);
            } catch (e) {
                console.log(e);
            }
        },
        async deleteAmount({ commit }, amount) {
            try {
                await axios.delete(`amount/${amount.id}`);
                commit(types.DELETE_AMOUNT, amount);
            } catch (e) {
                console.log(e);
            }
        }
    }
};
