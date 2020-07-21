<template>
  <div class="md:flex">
    <aside class="sidebar">
      <div class="name">Objednávkový systém</div>
      <div class="menu">
        <input
          class="pt-2 appearance-none text-black block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
          placeholder="Vyhledejte zboží"
          type="text"
          v-model="search"
        />
        <div class="link" v-on:click="allProduct">Všechny produkty</div>
        <div v-bind:key="category.id" v-for="category in categories">
          <div class="link" v-on:click="value(category.id, category.name)">{{ category.name }}</div>
        </div>
      </div>
    </aside>
    <AddOrderTable
      :add-order="addOrder"
      :all="all"
      :category-name="categoryName"
      :collapsed="collapsed"
      :filtered-list="filteredList"
      :orders="orders"
      :products="products"
      :val="val"
    />
  </div>
</template>

<script>
import AddOrderTable from "./AddOrderTable";

export default {
  name: "addOrderToUser",
  components: { AddOrderTable },
  props: {
    id: ""
  },
  data() {
    return {
      collapsed: false,
      orders: {
        order: null
      },
      search: "",
      val: "",
      all: true,
      data: {},
      categoryName: "",
      loading: false
    };
  },
  computed: {
    grnItemsArr() {
      return Object.keys(this.orders.order).reduce((acc, itemKey) => {
        let row = [itemKey, this.order[itemKey]];
        acc.push(row);
        return acc;
      }, []);
    },
    filteredList() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    filterOrders() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    }
  },
  created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    const order = {};
    this.products.forEach(item => {
      order[item[1]] = null;
    });
    this.orders.order = order;
  },
  methods: {
    allProduct() {
      this.all = true;
    },
    value(id, name) {
      this.val = id;
      this.categoryName = name;
      this.search = "";
      this.all = false;
    },
    addOrder() {
      delete this.orders.order[undefined];
      this.axios
        .post(`order/${this.id}`, this.orders, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(res => {
          this.$router.push({
            name: "showOrder",
            params: { idc: res.data.data.id }
          });
          this.$store.commit("addOrder", res.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
