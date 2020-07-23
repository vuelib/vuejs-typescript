<template>
  <container :loading="loadComponent">
    <sidebar
      name="Objednávkový systém"
      :items="categories"
      :routerLink="false"
      :onSelect="handleSelectCategory"
    >
      <input class="btn-search" placeholder="Vyhledejte zboží" type="text" v-model="search" />
    </sidebar>
    <Content :title="category.name">
      <order-table
        :products="filteredProducts"
        :orders="orders"
        :onClick="addOrder"
        buttonName="Vytvořit objednávku"
      />
    </Content>
  </container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import container from "../common/container.vue";
import Content from "../common/content.vue";
import sidebar from "../common/sidebar.vue";
import orderTable from "../common/orderTable.vue";
@Component({
  name: "ShowCategory",
  components: {
    container,
    Content,
    sidebar,
    orderTable
  },
  computed: mapGetters(["category", "filteredProducts"]),
  methods: mapMutations(["fetchCategories", "fetchProducts"])
})
export default class addOrder extends Vue {
  private _search: any;

  get categories() {
    return [
      { name: "Všechny produkty", _key: "" },
      ...this.$store.getters.categories
    ];
  }

  get products() {
    return this.$store.getters.products;
  }
  get orders() {
    return this.products.filter(p => p.value !== "");
  }

  get search() {
    return this._search;
  }
  set search(search) {
    this._search = search;
    // let products = this.products.filter(product => {
    //   product.name.toLowerCase().includes(search.toLowerCase());
    // });
  }
  loadComponent?: Boolean = false;
  loading?: Boolean = false;

  async beforeMount() {
    this.loadComponent = true;
    await this.$store.dispatch("fetchCategories");
    await this.$store.dispatch("fetchProducts");
    await this.$store.commit("setCategory", {
      name: "Všechny produkty",
      _key: ""
    });
    this.loadComponent = false;
  }

  handleSelectCategory = category => {
    this.$store.commit("setCategory", category);
    this.$store.commit("filterProducts", category);
  };

  addOrder() {
    if (this.orderIsEmpty()) return;
    this.loading = true;
    this.axios
      .post(
        `/order`,
        { amounts: this.orders },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      )
      .then(res => {
        this.loading = false;
        this.$router.push({
          name: "ShowOrder",
          params: { id: res.data.id }
        });
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }

  orderIsEmpty = () => {
    return this.orders.length === 0;
  };
}
</script>
