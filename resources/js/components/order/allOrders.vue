<template>
  <Container :loading="loadComponent">
    <Sidebar name="Objednávky" :items="orders" type="name" :param="setParam" />
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
@Component({
  name: "allOrders",
  components: {
    Container,
    Sidebar
  },
  computed: mapGetters(["orders"]),
  methods: mapMutations(["fetchOrders"])
})
export default class allOrders extends Vue {
  @Prop() successMessage?: String;
  errors!: [];
  loadComponent?: Boolean = false;

  get orders() {
    const orders = this.$store.getters.orders;
    let orderMap = orders.map(p => {
      let status = `${p.id} ${p.status} ${p.created_at}`;
      return { name: status, ...p };
    });
    return orderMap;
  }

  setParam = order => {
    return {
      name: "ShowOrder",
      params: { id: order.id }
    };
  };

  beforeMount() {
    this.loadComponent = true;
    this.$store
      .dispatch("fetchOrders")
      .then(res => (this.loadComponent = false))
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
