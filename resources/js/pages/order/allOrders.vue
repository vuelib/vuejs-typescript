<template>
  <Container :loading="loadComponent">
    <Sidebar
      name="Objednávky"
      :items="orders.data"
      :renderHTML="renderHTML"
      type="name"
      :param="setParam"
    >
      <router-link :to="{ name: 'objednat' }" class="link text-center">
        <i class="fas fa-plus"></i> Přidat
      </router-link>
      <div v-show="orders.data.length === 0">Nemáte žádné objednávky</div>
      <template v-slot:bottom>
        <pagination :items="orders" />
      </template>
    </Sidebar>
    <router-view :key="$route.fullPath"></router-view>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
  name: "allOrders",
  middleware: ["auth", "customer"],
  computed: mapGetters(["orders"]),
  methods: mapMutations(["fetchOrders"]),
})
export default class allOrders extends Vue {
  loadComponent?: Boolean = false;

  renderHTML = (order) => {
    const className = order.status == "rozpracovaná" ? "fa-pen" : "fa-check";
    const html = `č. ${order.id} 
             <i  class="fas ${className}"></i> ${order.created_at}`;
    return html;
  };

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
      .then((res) => (this.loadComponent = false));
  }
}
</script>
