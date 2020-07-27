<template>
  <Container :loading="loadComponent">
    <Sidebar name="Objednávky" :items="orders.data" type="name" :param="setParam">
      <div v-show="orders.data.length === 0">Nemáte žádné objednávky</div>
      <template v-slot:bottom>
        <pagination :items="orders" />
      </template>
    </Sidebar>
    <transition mode="out-in" name="component-fade">
      <router-view />
    </transition>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Container from "../common/container.vue";
import Sidebar from "../common/sidebar.vue";
import Pagination from "../common/Pagination.vue";
@Component({
  name: "allOrders",
  components: {
    Container,
    Sidebar,
    Pagination,
  },
  computed: mapGetters(["orders"]),
  methods: mapMutations(["fetchOrders"]),
})
export default class allOrders extends Vue {
  @Prop() successMessage?: String;
  errors!: [];
  loadComponent?: Boolean = false;

  get orders() {
    const order = this.$store.getters.orders;
    const { data } = order;
    order.data = data.map((p) => {
      let status = `${p.id} ${p.status} ${p.created_at}`;
      return { name: status, ...p };
    });
    return order;
  }

  setParam = (order) => {
    return {
      name: "ShowOrder",
      params: { id: order.id },
    };
  };

  beforeMount() {
    this.loadComponent = true;
    this.$store
      .dispatch("fetchOrders", 1)
      .then((res) => (this.loadComponent = false))
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>
