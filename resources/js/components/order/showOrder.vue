<template>
  <Content :title="`Objednávka č. ${order.id}`">
    <div class="table"><user=t /></div>
    <div class="table">
      <tableOrderList />
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Content from "../common/content.vue";
import tableHead from "../common/tableHead.vue";
import userDetails from "./userDetails.vue";
import tableOrderList from "./tableOrderList.vue";
@Component({
  name: "shoOrder",
  components: {
    Content,
    tableHead,
    userDetails,
    tableOrderList
  },
  computed: mapGetters(["order"]),
  methods: mapMutations(["fetchOrder"])
})
export default class shoOrder extends Vue {
  @Prop() id!: any;
  loading?: Boolean = false;
  columns = [
    { path: "id", label: "Produkt" },
    { path: "hmotnost", label: "Hmotnost" },
    { path: "value", label: "Množství" },
    { path: "mnozstvi", label: "Možnosti" }
  ];
  get order() {
    return this.$store.getters.order;
  }
  set order(order) {
    console.log(order);
  }
  sortColumn?: any = { path: "id", order: "asc" };

  handleSort = sortColumn => {
    console.log(sortColumn);
    this.sortColumn = sortColumn;
  };

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal) {
    this.$store.dispatch("fetchOrder", this.id);
  }
}
</script>
