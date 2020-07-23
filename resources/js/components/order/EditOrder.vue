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
        buttonName="Upravit objednávku"
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
import orders from "../../state/modules/orders";
@Component({
  name: "editOrder",
  components: {
    container,
    Content,
    sidebar,
    orderTable
  },
  computed: mapGetters(["category", "filteredProducts"]),
  methods: mapMutations(["fetchCategories", "fetchProducts"])
})
export default class editOrder extends Vue {
  @Prop() id!: String;
  private _search: any;

  get categories() {
    return [
      { name: "Všechny produkty", _key: "" },
      ...this.$store.getters.categories
    ];
  }

  get products() {
    const products = [...this.$store.getters.products];
    const order = this.$store.getters.order;
    products.map(p => {
      {
        order.amounts.map(a => {
          if (p.id === a.product.id) {
            p.value = a.value;
            p.amount_id = a.id;
          }
        });
      }
    });
    return products;
  }
  get amounts() {
    return this.products.filter(p => p.value !== "");
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
    return this._search;
  }
  set search(search) {
    this._search = search;
    let products = this.products.filter(product => {
      product.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  loadComponent?: Boolean = false;
  loading?: Boolean = false;

  async beforeMount() {
    this.loadComponent = true;
    await this.$store.dispatch("fetchOrder", this.id);
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

  editOrder() {
    this.loading = true;
    this.axios
      .put(
        `/order/${this.id}`,
        { amounts: this.amounts, delete: this.filteredOrder },
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
        this.loading = false;
      });
  }
}
</script>
