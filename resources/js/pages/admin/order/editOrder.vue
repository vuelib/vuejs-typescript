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
        :orders="amounts"
        :onClick="editOrder"
        :errors="errors"
        buttonName="Upravit objednávku"
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
} from "../../../state/mutations-types";
@Component({
  name: "editOrder",
  middleware: ["auth", "admin"],
  computed: mapGetters(["category"]),
  methods: mapMutations(["fetchCategories", "fetchProducts"]),
})
export default class editOrder extends Vue {
  private getSearch: String = "";
  private loadComponent?: Boolean = false;
  private loading?: Boolean = false;
  public errors = [];

  get categories() {
    return [
      { name: "Všechny produkty", _key: "" },
      ...this.$store.getters.categories,
    ];
  }

  get products() {
    const products = [...this.$store.getters.products];
    const order = this.$store.getters.order;
    products.map((p) => {
      {
        order.amounts.map((a) => {
          if (p.id === a.product.id) {
            p.value = a.value;
            p.amount_id = a.id;
          }
        });
      }
    });
    return products;
  }
  get filterProducts() {
    return this.$store.getters.filteredProducts;
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
  get amounts() {
    return this.products.filter((p) => p.value !== "");
  }

  get order() {
    return this.$store.getters.order;
  }

  get filteredOrder() {
    const obj = this.order.amounts;
    const result: string[] = [];
    obj.some((object, indx) => {
      this.products.some((p, index) => {
        if (p.id === object.product.id) if (p.value === "") result.push(p);
      });
    });
    return result;
  }

  get search() {
    return this.getSearch;
  }
  set search(search) {
    this.getSearch = search;
    console.log(this.search);
  }

  async beforeMount() {
    this.loadComponent = true;
    await this.$store.dispatch("fetchOrder", this.$route.params.idc);
    await this.$store.dispatch("fetchCategories");
    await this.$store.dispatch("fetchProducts");
    await this.$store.commit(FETCH_CATEGORY, {
      name: "Všechny produkty",
      _key: "",
    });
    this.loadComponent = false;
  }

  handleSelectCategory = (category) => {
    this.$store.commit(FETCH_CATEGORY, category);
    this.$store.commit(FILTER_PRODUCTS, category);
  };

  editOrder() {
    this.loading = true;
    this.errors = [];
    if (this.amounts.length === 0) {
      this.errors["amounts"] = "Nemáte vybrané žádné produkty.";
      return;
    }
    this.axios
      .put(`/order/${this.$route.params.idc}`, {
        amounts: this.amounts,
        delete: this.filteredOrder,
      })
      .then((res) => {
        this.loading = false;
        this.$router.push({
          name: "showOrder",
          params: { idc: res.data.id },
        });
      })
      .catch((error) => {
        if (error.response.status == 422) {
          const newErrors = [];
          const errors = error.response.data.errors;
          for (error in errors) {
            let index = `${error}`.split(`amounts.`)[1].split(".value")[0];
            let e: any = {
              ...this.amounts[index],
              error: errors[error][0],
            };
            //@ts-ignore
            newErrors[e.id] = e;
          }
          newErrors["amounts"] = "Množství musí obsahovat pouze číslice.";
          this.errors = newErrors;
        }
        this.loading = false;
      });
  }
}
</script>
