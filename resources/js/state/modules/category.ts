import _ from "lodash";
import axios from "axios";
import * as types from "../mutations-types";
export default {
    state: () => ({
        categories: [],
        category: []
    }),
    getters: {
        categories(state) {
            return state.categories;
        },
        category(state) {
            return state.category;
        }
    },
    mutations: {
        [types.FETCH_CATEGORIES](state, categories) {
            state.categories = categories;
        },
        [types.FETCH_CATEGORY](state, category) {
            state.category = category;
        },
        [types.FILTER_CATEGORY](state, sortColumn) {
            state.category = _.orderBy(
                state.category,
                [sortColumn.path],
                [sortColumn.order]
            );
        },
        [types.DELETE_CATEGORY](state, id) {
            const index = state.categories.findIndex(item => item.id == id);
            state.categories.splice(index, 1);
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            let res = await axios.get(`category`);
            commit(types.FETCH_CATEGORIES, res.data);
        },
        async fetchCategory({ commit }, id) {
            let res = await axios.get(`category/${id}`);
            commit(types.FETCH_CATEGORY, res.data);
        },
        async deleteCategory({ rootState, commit }, id) {
            let res = await axios.delete(`category/${id}`);
            commit(types.DELETE_CATEGORY, id);
        }
    }
};
