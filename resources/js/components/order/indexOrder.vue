<template>
    <div>
        <div class="flex mb-4">
            <aside class="sidebar">
                <div class="name">Objednávky</div>
                <div class="menu">
                    <div class="link" v-if="!ordersFilter">
                        Nemáte žádné objednávky
                    </div>
                    <router-link :class="order.id == activeOrder.id ? 'font-bold text-junglegreen font-base' : ''" :to="{ name: 'ShowOrder', params: {id: order.id} }" class="link" v-bind:key="order.id"
                                 v-for="order in orders"
                                 v-if="orders"
                    >č. {{order.id}}
                        <i :class="order.status == 'rozpracovaná' ? 'fa-pen' : 'fa-check'" class="fas"></i>
                        {{order.created_at | formatDate }}
                    </router-link>
                </div>
            </aside>
            <transition mode="out-in" name="component-fade">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllOrders",
        created() {
            this.$store.dispatch("retrieveOrders");
        },
        computed: {
            orders() {
                return this.$store.getters.orders;
            },
            ordersFilter() {
                return this.$store.getters.ordersFilter;
            },
            activeOrder() {
                return this.$store.getters.order;
            },
        }
    };
</script>
