<template>
  <div>
    <div class="loading" v-if="loading"></div>

    <div class="header" v-if="!loading">
      <h3>Přehled všech objednávek</h3>
    </div>

    <div class="flex flex-wrap" v-if="!loading">
      <div class="w-full">
        <div class="table">
          <table class="table-fixed">
            <thead>
              <tr>
                <th>Číslo</th>
                <th>Zakazník</th>
                <th class="px-4 py-2">Status</th>
                <th>Datum vytvoření</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="order.id" v-for="order in allOrders">
                <td class="border text-center py-2">
                  <router-link
                    :to="{ name: 'showOrder', params: {id:order.user_id ,idc: order.id} }"
                  >{{order.id}}</router-link>
                </td>
                <td class="border text-center p-2">
                  <router-link
                    :to="{ name: 'showOrder', params: {id:order.user_id ,idc: order.id} }"
                  >{{order.user.invoice.nazev }}</router-link>
                </td>
                <td class="border px-4 text-center py-2">
                  <router-link
                    :to="{ name: 'showOrder', params: {id:order.user_id ,idc: order.id} }"
                  >
                    <i :class="order.status == 'rozpracovaná' ? 'fa-pen' : 'fa-check'" class="fas"></i>
                  </router-link>
                </td>
                <td class="border text-center">
                  <router-link
                    :to="{ name: 'showOrder', params: {id:order.user_id ,idc: order.id} }"
                  >{{order.created_at | fullFormatDate}}</router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <!--                    <button class="" @click="fetchStories(pagination.prev_page_url)"-->
          <!--                            :disabled="!pagination.prev_page_url">-->
          <!--                        Previous-->
          <!--                    </button>-->
          <!--                    <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>-->
          <!--                    <button class="btn btn-default" @click="fetchStories(pagination.next_page_url)"-->
          <!--                            :disabled="!pagination.next_page_url">Next-->
          <!--                    </button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createProduct",
  props: {
    id: "",
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch("allOrders").then((response) => {
      this.loading = false;
    });
    // Echo.channel('orders')
    //     .listen('OrderAdded', (e) => {
    //         console.log(e.order);
    //         this.$store.state.allOrders.unshift(e.order)
    //         // this.$store.commit("allOrders", e.orders);
    //     })
  },
  computed: {
    allOrders() {
      return this.$store.getters.allOrders;
    },
  },
};
</script>
