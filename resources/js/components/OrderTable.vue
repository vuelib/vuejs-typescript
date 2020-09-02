<template>
  <div class="m-4">
    <div
      class="text-primary ml-4 p-2 font-bold rounded w-full bg-button"
      v-if="errors.amounts"
    >{{ errors.amounts }}</div>
    <div class="table w-full">
      <h4 v-on:click="collapsed = !collapsed">Zvolené produkty</h4>
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
          class="w-full text-center font-bold"
        >Nemáte vybrané žádné produkty</div>
      </div>
    </div>
    <div class="m-3">
      <FormButton :name="buttonName" :loading="loading" :onClick="onClick" />
    </div>
    <div class="table w-full">
      <table class="w-full">
        <Table-head :columns="columns" :sortColumn="sortColumn" :onSort="handleSortProducts" />
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border py-2 px-2 text-center">{{ product.id }}</td>
            <td class="border py-2 px-2 text-center">{{ product.name }}</td>
            <td class="border py-2 px-2 flex justify-around products-inputs">
              <input
                class="text-center input-table"
                :class="[
                                    errors[product.id]
                                        ? 'border-red-800 border-2'
                                        : ''
                                ]"
                v-model="product.value"
                :name="product.id"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.enter.exact.prevent="focusNext(true)"
              />
            </td>
          </tr>
          <tr v-if="products.length === 0">
            <td class="text-center font-bold" colspan="4">Nenalezeny žádné produkty.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "orderTable",
})
export default class orderTable extends Vue {
  @Prop({ required: true }) readonly products!: any;
  @Prop() orders!: any;
  @Prop() errors?: any;
  @Prop({ default: "Potvrdit" }) buttonName!: String;
  @Prop() loading!: Boolean;
  @Prop() onClick!: Function;
  public collapsed?: Boolean = false;

  get menuItems(): HTMLElement {
    //@ts-ignore
    return document.querySelectorAll(".products-inputs input");
  }
  focusedIndex: Number = 0;
  columns: Object = [
    { path: "id", label: "Číslo produktu" },
    { path: "name", label: "Název" },
    { path: "value", label: "Množství" },
  ];

  sortColumn?: any = { path: "id", order: "asc" };

  handleSortOrders = (sortColumn) => {
    console.log(sortColumn);
  };
  handleSortProducts = (sortColumn) => {
    console.log(sortColumn);
    this.sortColumn = sortColumn;
  };

  focusPrevious(isArrowKey) {
    //@ts-ignore
    this.focusedIndex = this.focusedIndex - 1;
    if (isArrowKey) {
      this.focusItem();
    }
  }
  focusNext(isArrowKey) {
    //@ts-ignore
    this.focusedIndex = this.focusedIndex + 1;
    if (isArrowKey) {
      this.focusItem();
    }
  }
  focusItem() {
    if (
      this.focusedIndex < 0 ||
      //@ts-ignore
      this.focusedIndex > this.menuItems.length - 1
    )
      return;
    //@ts-ignore
    this.menuItems[this.focusedIndex].focus();
  }
}
</script>
