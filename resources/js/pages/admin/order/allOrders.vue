<template>
  <Container :loading="loading">
    <Content title="Přehled všech objednávek">
      <div class="mb-3">
        <button
          class="btn-edit-trans"
          :class="{ active: filter == '%%' }"
          @click="changeFilter('%%')"
        >Všechny</button>
        <button
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          :class="{ active: filter == '0' }"
          @click="changeFilter('0')"
        >Rozepsané</button>
        <button
          class="btn-edit-trans"
          :class="{ active: filter == '1' }"
          @click="changeFilter('1')"
        >Potvrzené</button>
      </div>
      <div class="table">
        <Table
          :columns="columns"
          :data="allOrders.data"
          :sortColumn="sortColumn"
          :actions="actions"
          :onSort="handleSort"
        />
        <Pagination :rangeRequired="true" :items="allOrders" />
      </div>
    </Content>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
  name: "allOrders",
  middleware: ["auth", "admin"],
})
export default class allOrders extends Vue {
  get allOrders() {
    return this.$store.getters.allOrders;
  }
  get filter() {
    return this.$store.getters.allOrders;
  }
  loading?: Boolean = false;
  get columns() {
    const columns = [
      { path: "id", label: "Číslo" },
      { path: "user", label: "Zakazník" },
      {
        content: (order) => {
          const className =
            order.status == "rozpracovaná" ? "fa-pen" : "fa-check";
          const html = `
             <i class="fas ${className}"></i>`;
          return html;
        },
        label: "Status",
      },
      { path: "created_at", label: "Datum vytvoření" },
    ];
    return columns;
  }
  actions = [
    {
      renderHTML: (order) => {
        return `<i class="fa fa-eye" aria-hidden="true"></i>`;
      },
      param: (order) => {
        return {
          name: "showOrder",
          params: { id: order.user_id, idc: order.id },
        };
      },
    },
  ];
  sortColumn?: any = { path: "id", order: "asc" };
  handleSort = (sortColumn) => {
    this.sortColumn = sortColumn;
  };
  created() {
    this.fetchOrders();
  }
  fetchOrders() {
    this.loading = true;
    this.$store.dispatch("fetchOrderss", 1).then((response) => {
      this.loading = false;
    });
  }
  changeFilter(filter) {
    this.$store.commit("setFilterOrders", filter);
    this.fetchOrders();
  }
}
</script>
