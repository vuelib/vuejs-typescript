<template>
    <div class="md:flex">
        <aside class="sidebar">
            <div class="flex">
                <div  class="w-1/6 text-black block cursor-pointer md:hidden">
                    <Slide Push :closeOnNavigation="true">
                        <div
                            class="link"
                            v-on:click="allProduct"
                        >
                            Všechny produkty
                        </div>
                        <div v-bind:key="category.id" v-for="category in categories">
                            <div
                                class="link"
                                v-on:click="value(category.id, category.name)"
                            >
                                {{ category.name }}
                            </div>
                        </div>
                    </Slide>
                </div>
                <div class="name w-4/6 md:w-full pt-2 md:pt-0">Objednávkový systém</div>
            </div>
            <div class="menu">
                <input
                    class="pt-2 appearance-none text-black block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    placeholder="Vyhledejte zboží"
                    type="text"
                    v-model="search"
                />
                <div
                    class="link hidden md:block"
                    v-on:click="allProduct"
                >
                    Všechny produkty
                </div>
                <div v-bind:key="category.id" v-for="category in categories">
                    <div
                        class="link hidden md:block"
                        v-on:click="value(category.id, category.name)"
                    >
                        {{ category.name }}
                    </div>
                </div>
            </div>
        </aside>
        <div>
            <div
                class="mt-3 p-3"
            >
                <h3>
                    {{ all ? "Všechny produkty" : categoryName }}
                </h3>
            </div>
            <div
                class="bg-ivory border-t-2 border-b-4 border-ivory rounded-lg shadow-lg  ml-3"
                v-if="orders"
            >
                <div class="flex flex-col p-2">
                    <h4 class="text-xl font-semibold cursor-pointer text-junglegreen"
                        v-on:click="collapsed = !collapsed">Zvolené produkty</h4>
                    <div class="flex  font-bold text-center" v-show="!collapsed">
                        <div class="w-3/6 h-6 text-left pl-2">Název produktu</div>
                        <div class="w-2/6 h-6 ">Balení</div>
                        <div class="w-2/6 h-6 ">Množství</div>
                    </div>
                    <div v-bind:key="product.id" v-for="product in products" v-show="!collapsed">
                        <div v-bind:key=(index) v-for="(value, index) in orders.order">
                            <div
                                class="flex text-center"
                                v-if="index == product.id"
                            >
                                <div class="w-3/6  text-left pl-2">{{ product.name }}</div>
                                <div class="w-2/6 h-6">{{ product.hmotnost }}</div>
                                <div class="w-2/6 h-6 ">{{ value }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form @submit.prevent="addOrder">
                <button
                    class="success"
                    type="submit"
                >
                    Potvrdit
                </button>
                <div
                    class="table mt-3"
                >
                    <div class="flex flex-wrap">
                        <table class="table-fixed">
                            <thead>
                            <tr>
                                <th class="w-1/2 px-4 py-2">
                                    Název produktu
                                </th>
                                <th class="w-1/4 px-4 py-2">Balení</th>
                                <th class="w-1/4 px-4 py-2">Množství</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-bind:key="product.id"
                                v-for="(product, index) in filteredList"
                                v-if="product.category_id == val && !all"
                            >
                                <td class="border px-4 py-2">
                                    {{ product.name }}
                                </td>
                                <td class="border px-4 py-2">
                                    {{ product.hmotnost }}
                                </td>
                                <td class="border excel px-4 py-2">
                                    <input
                                        :id="index"
                                        class="w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        placeholder="Množství"
                                        type="text"
                                        v-model="orders.order[product.id]"
                                    />
                                </td>
                            </tr>
                            <tr v-else-if="all">
                                <td class="border px-4 py-2">
                                    {{ product.name }}
                                </td>
                                <td class="border px-4 py-2">
                                    {{ product.hmotnost }}
                                </td>
                                <td class="border px-4 py-2">
                                    <input
                                        :id="index"
                                        class="w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        placeholder="Množství"
                                        type="text"
                                        v-model="orders.order[product.id]"
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import SidebarMenu from "./SidebarMenu";
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "AddOrder",
        components: {SidebarMenu, Slide},
        data() {
            return {
                collapsed: false,
                orders: {
                    order: null
                },
                search: "",
                val: "",
                all: true,
                data: {},
                categoryName: "",
            };
        },
        computed: {
            grnItemsArr() {
                return Object.keys(this.orders.order).reduce((acc, itemKey) => {
                    let row = [itemKey, this.order[itemKey]];
                    acc.push(row);
                    return acc;
                }, []);
            },
            filteredList() {
                return this.products.filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            filterOrders() {
                return this.products.filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            categories() {
                return this.$store.getters.categories;
            },
            products() {
                return this.$store.getters.products;
            }
        },
        created() {
            this.$store.dispatch("fetchCategories");
            this.$store.dispatch("fetchProducts");
            const order = {};
            this.products.forEach(item => {
                order[item[1]] = null;
            });
            this.orders.order = order;
        },
        methods: {
            allProduct() {
                this.all = true;
            },
            value(id, name) {
                this.val = id;
                this.categoryName = name;
                this.search = "";
                this.all = false;
            },
            addOrder() {
                delete this.orders.order[undefined];
                this.axios
                    .post(`order`, this.orders,
                        {
                            headers: {
                                Authorization:
                                    "Bearer " + localStorage.getItem("access_token")
                            }
                        })
                    .then(res => {
                        this.$router.push({
                            name: "ShowOrder",
                            params: {id: res.data.data.id}
                        });
                        this.$store.commit("addOrder", res.data.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    };
</script>
<style>
    .bm-burger-button {
        position: relative;
        width: 30px;
        height: 30px;
        left: 36px;
        top: 36px;
        cursor: pointer;
    }
    .bm-burger-bars {
        background-color: #000;
    }
    .line-style {
        position: absolute;
        height: 10%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(63, 63, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
        background: #fff;
    }
    .bm-item-list {
        color: #b8b7ad;
        margin-left: 10%;
        font-size: 20px;
    }
    .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 0.7em;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
    }
</style>
