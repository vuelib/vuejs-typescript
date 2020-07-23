<template>
  <div class="m-4">
    <div class="table w-full">
      <h4
        class="text-xl font-semibold cursor-pointer text-junglegreen"
        v-on:click="collapsed = !collapsed"
      >Zvolené produkty</h4>
      <Table
        v-show="!collapsed"
        :columns="columns"
        :data="orders"
        :sortColumn="sortColumn"
        :onSort="handleSortOrders"
      />
      <div v-show="!collapsed">
        <div
          v-show="orders.length === 0"
          class="w-full text-center text-xl"
        >Nemáte vybrané žádné produkty</div>
      </div>
    </div>
    <div class="m-3">
      <formButton :name="buttonName" :loading="loading" :onClick="onClick" />
    </div>
    <div class="table w-full">
      <table class="table w-full">
        <table-head :columns="columns" :sortColumn="sortColumn" :onSort="handleSortProducts" />
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border py-2 px-2 text-center">{{product.id}}</td>
            <td class="border py-2 px-2 text-center">{{product.name}}</td>
            <td class="border py-2 px-2 text-center products-inputs">
              <input
                class="text-center input-table"
                v-model="product.value"
                :name="product.id"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Table from "../common/table.vue";
import tableHead from "../common/tableHead.vue";
import tableBody from "../common/tableBody.vue";
import customInput from "../common/customInput.vue";
import formButton from "../common/formButton.vue";

@Component({
  name: "orderTable",
  components: {
    Table,
    tableHead,
    tableBody,
    customInput,
    formButton
  }
})
export default class orderTable extends Vue {
  @Prop({ required: true }) readonly products!: any;
  @Prop() orders!: any;
  @Prop({ default: "Potvrdit" }) buttonName!: String;
  @Prop() loading!: Boolean;
  @Prop() onClick!: Function;
  public collapsed?: Boolean = false;

  get menuItems() {
    return document.querySelectorAll(".products-inputs input");
  }
  focusedIndex: any = 0;
  columns: any = [
    { path: "id", label: "Číslo produktu" },
    { path: "name", label: "Název" },
    { path: "value", label: "Množství" }
  ];

  columnsProduct: any = [
    { path: "id", label: "Číslo produktu" },
    { path: "name", label: "Název" },
    {
      key: "value",
      comp: {
        component: customInput,
        props: product => {
          return {
            ":value": product.value,
            name: product.name
          };
        }
      }
    }
  ];
  sortColumn?: any = { path: "id", order: "asc" };

  handleSortOrders = sortColumn => {
    console.log(sortColumn);
  };
  handleSortProducts = sortColumn => {
    console.log(sortColumn);
    // this.sortColumn = sortColumn;
  };

  focusPrevious(isArrowKey) {
    this.focusedIndex = this.focusedIndex - 1;
    if (isArrowKey) {
      this.focusItem();
    }
  }
  focusNext(isArrowKey) {
    this.focusedIndex = this.focusedIndex + 1;
    if (isArrowKey) {
      this.focusItem();
    }
  }
  focusItem() {
    this.menuItems[this.focusedIndex].focus();
  }
}
</script>

