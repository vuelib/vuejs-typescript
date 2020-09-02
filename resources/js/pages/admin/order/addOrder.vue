<template>
  <container :loading="loadComponent">
    <sidebar
      name="Objednávkový systém"
      :items="categories"
      :routerLink="false"
      :onSelect="handleSelectCategory"
    >
      <input
        ref="search"
        class="btn-search"
        placeholder="Vyhledejte zboží"
        type="text"
        :value="search"
        @input="updateSearch"
      />
    </sidebar>
    <Content :title="category.name">
      <order-table
        :products="filteredProducts"
        :orders="orders"
        :onClick="addOrder"
        :errors="errors"
        buttonName="Vytvořit objednávku"
      />
    </Content>
  </container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import {
  FETCH_CATEGORY,
  FILTER_PRODUCTS,
  ADD_ORDER,
} from "../../../state/mutations-types";
@Component({
  name: "addOrder",
  middleware: ["auth", "admin"],
  computed: mapGetters(["category"]),
  methods: mapMutations(["fetchCategories", "fetchProducts"]),
})
export default class addOrder extends Vue {
  @Prop({ type: Number }) id!: Number;
  public search: String = "";
  public errors = {};
  loadComponent?: Boolean = false;
  loading?: Boolean = false;

  get categories() {
    return [
      { name: "Všechny produkty", _key: "" },
      ...this.$store.getters.categories,
    ];
  }

  get filterProducts() {
    return this.$store.getters.filteredProducts;
  }

  updateSearch({ target: input }) {
    this.search = input.value;
  }
  get products() {
    return this.$store.getters.products;
  }
  get filteredProducts() {
    return this.filterProducts.filter((p) => {
      return (
        p.name.toLowerCase().includes(this.search.toLowerCase()) ||
        p.baleni.toLowerCase().includes(this.search.toLowerCase()) ||
        `${p.id}`.includes(this.search.toLowerCase())
      );
    });
  }
  get orders() {
    return this.products.filter((p) => p.value !== "");
  }

  async beforeMount() {
    this.loadComponent = true;
    await this.$store.dispatch("fetchCategories");
    await this.$store.dispatch("fetchProducts");
    await this.$store.commit(FETCH_CATEGORY, {
      name: "Všechny produkty",
      _key: "",
    });
    this.loadComponent = false;
  }

  handleSelectCategory = (category) => {
    this.search = "";
    this.$store.commit(FETCH_CATEGORY, category);
    this.$store.commit(FILTER_PRODUCTS, category);
  };
  async addOrder() {
    this.errors = [];
    this.loading = true;
    if (this.orders.length === 0) {
      this.errors["amounts"] = "Nemáte vybrané žádné produkty.";
      return;
    }
    try {
      const { data: order } = await this.axios.post("order", {
        amounts: this.orders,
        user_id: this.$route.params.id,
      });
      this.$store.commit(ADD_ORDER, { order });
      this.$router.push({
        name: "showOrder",
        params: { idc: order.id },
      });
    } catch (error) {
      if (error.response.status == 422) {
        const newErrors = [];
        const errors = error.response.data.errors;
        for (error in errors) {
          let index = `${error}`.split(`amounts.`)[1].split(".value")[0];
          let e: any = {
            ...this.orders[index],
            error: errors[error][0],
          };
          //@ts-ignore
          newErrors[e.id] = e;
        }
        newErrors["amounts"] = "Množství musí obsahovat pouze číslice.";
        this.errors = newErrors;
      }
      this.loading = false;
    }
  }
  // this.$store
  //   .dispatch("addOrder", {
  //     amounts: this.orders,
  //     user_id: this.$route.params.id,
  //   })
  //   .then((order) => {
  //     this.loading = false;
  //   this.$router
  //     .push({
  //       name: "showOrder",
  //       params: { idc: order.id },
  //     })
  //       .catch((error) => {
  //         if (error.response.status == 422) {
  //           const newErrors = [];
  //           const errors = error.response.data.errors;
  //           for (error in errors) {
  //             let index = `${error}`.split(`amounts.`)[1].split(".value")[0];
  //             let e: any = {
  //               ...this.orders[index],
  //               error: errors[error][0],
  //             };
  //             //@ts-ignore
  //             newErrors[e.id] = e;
  //           }
  //           newErrors["amounts"] = "Množství musí obsahovat pouze číslice.";
  //           this.errors = newErrors;
  //         }
  //         this.loading = false;
  //       });
  //   });
}
</script>
