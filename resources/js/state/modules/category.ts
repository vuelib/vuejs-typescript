import _ from "lodash";
import axios from "axios";
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
        setCategories(state, categories) {
            state.categories = categories;
        },
        setCategory(state, category) {
            state.category = category;
        },
        filterCategory(state, sortColumn) {
            state.category = _.orderBy(
                state.category,
                [sortColumn.path],
                [sortColumn.order]
            );
        },
        deleteCategory(state, id) {
            const index = state.categories.findIndex(item => item.id == id);
            state.categories.splice(index, 1);
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            let res = await axios.get(`category`);
            commit("setCategories", res.data);
        },
        async fetchCategory({ commit }, id) {
            let res = await axios.get(`category/${id}`);
            commit("setCategory", res.data);
        },

        deleteCategory({ rootState, commit }, id) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + rootState.auth.token;

            axios
                .delete(`category/${id}`)
                .then(response => {
                    commit("deleteCategory", id);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
