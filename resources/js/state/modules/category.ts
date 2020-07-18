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
        deleteCategory(state, id) {
            const index = state.categories.findIndex(item => item.id == id);
            state.categories.splice(index, 1);
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            let res = await axios.get(`/api/category`);
            commit("setCategories", res.data);
        },
        async fetchCategory({ commit }, id) {
            let res = await axios.get(`/api/category/${id}`);
            commit("setCategory", res.data);
        },

        deleteCategory(context, id) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            axios
                .delete(`api/category/${id}`)
                .then(response => {
                    context.commit("deleteCategory", id);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
