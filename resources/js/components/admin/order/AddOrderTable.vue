<template>
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
                    <TableMenu :all="all" :filtered-list="filteredList" :orders="orders" :val="val"/>
                </div>
            </div>
        </form>

    </div>
</template>
<script>
    import TableMenu from "./TableMenu";

    export default {
        name: 'AddOrderTable',
        components: {TableMenu},
        props: {
            addOrder: {},
            all: {},
            categoryName: {},
            collapsed: {},
            filteredList: {},
            orders: {},
            products: {},
            val: {}
        }
    }
</script>
