import axios from "axios";

interface Product {
    products: Object;
}

export default {
    state: () => ({
        products: []
    }),
    getters: {
        products(state: Product) {
            return state.products;
        }
    },
    mutations: {
        fetchProducts(state: Product, products: Product) {
            state.products = products;
        }
    },
    actions: {
        fetchProducts(context) {
            axios
                .get(`products`)
                .then(response => {
                    context.commit("fetchProducts", response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
