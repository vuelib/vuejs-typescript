<template>
  <div class="table w-full">
    <div v-if="loading" class="loading"></div>
    <table class="w-full" v-else>
      <table-head :columns="columns" :sortColumn="sortColumn" :onSort="handleSort" />
      <tbody>
        <transition v-bind:key="amount.id" v-for="amount in order.amounts" name="fade">
          <tr>
            <td class="border px-4 py-2">{{ amount.product.name }}</td>
            <td class="border px-4 py-2 text-center">{{ amount.product.baleni }}</td>
            <td class="border px-4 py-2 text-center">
              <input
                v-show="order.status !== 'potvrzena'"
                v-model="amount.value"
                v-if="amount.edit"
                class="input-table"
                type="number"
                v-on:keyup.enter="editAmount(amount)"
              />
              <div class="w-full h-full" v-else>{{amount.value }}</div>
            </td>
            <td class="border px-4 py-2" v-show="order.status !== 'potvrzena'">
              <button class="btn-edit-trans" @click.prevent="editAmount(amount)">
                <i class="fas fa-edit text-blue-800"></i>
              </button>
              <button class="btn-delete-trans" @click.prevent="deleteAmount(amount)">
                <i class="far fa-trash-alt text-black hover:text-white"></i>
              </button>
            </td>
          </tr>
        </transition>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";

@Component({
  name: "tableOrderList",
})
export default class tableOrderList extends Vue {
  @Prop({ default: false, type: Boolean }) readonly loading?;

  get order() {
    return this.$store.getters.order;
  }
  get columns() {
    const columns = [
      { path: "name", label: "Název produktu" },
      { path: "product.baleni", label: "Balení" },
      { path: "value", label: "Množství" },
    ];
    if (this.order.status !== "potvrzena") {
      return [...columns, { key: "", label: "Možnosti" }];
    }
    return columns;
  }
  sortColumn?: any = { path: "id", order: "asc" };

  handleSort = (sortColumn) => {
    this.sortColumn = sortColumn;
  };
  editAmount(amount) {
    amount.edit = !amount.edit;
    if (amount.edit) return;
    this.updateAmount(amount);
  }
  updateAmount(amount) {
    this.$store.dispatch("updateAmount", amount);
  }
  deleteAmount(amount) {
    this.$store.dispatch("deleteAmount", amount);
  }
}
</script>
<style scoped>
.fade-before-enter,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
  transform: translateY(0px);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
}
</style>
