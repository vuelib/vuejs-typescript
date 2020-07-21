import axios from "axios";

interface Product {
    products: any;
    filteredProducts: any;
}

export default {
    state: () => ({
        products: [],
        filteredProducts: []
    }),
    getters: {
        products(state: Product) {
            return state.products;
        },
        filteredProducts(state: Product) {
            return state.filteredProducts;
        }
    },
    mutations: {
        setProducts(state: Product, products) {
            state.products = products;
            state.filteredProducts = products;
        },
        filterProducts(state: Product, category) {
            state.filteredProducts =
                state.filteredProducts && category.id
                    ? state.products.filter(p => p.category_id == category.id)
                    : state.products;
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                let res = await axios.get(`products`);
                res.data.map(p => (p.value = ""));
                commit("setProducts", res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }
};
