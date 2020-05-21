<template>
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
</template>
<script>
    export default {
        name: 'TableMenu',
        props: {
            all: {},
            filteredList: {},
            orders: {},
            val: {}
        }
    }
</script>
