<template>
  <Content title="Vytvořit produkt">
    <div class="table">
      <Form :succesMessage="successMessage">
        <FormInput
          v-model="product.name"
          :error="errors.name"
          label="Název produktu"
          name="name"
          autofocus="true"
        />
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="label" for="category_id">Kategorie</label>
            <select class="ares-input" id="category_id" v-model="product.category_id">
              <!-- <option selected>Vyberte kategorii</option> -->
              <option
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                v-bind:key="category.id"
                v-bind:value="category.id"
                v-for="category in categories"
              >{{ category.name }}</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
            <p
              class="text-red-500 text-xs italname"
              v-if="errors.category_id"
            >{{ errors.category_id[0] }}</p>
          </div>
        </div>
        <FormInput
          v-model="product.hmotnost"
          :error="errors.hmotnost"
          label="Gramáž"
          name="hnotnost"
        />
        <FormButton :onClick="createProduct" name="Vytvořit produkt" :loading="loading" />
      </Form>
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
  name: "createProduct",
  middleware: ["auth", "admin"],
  computed: mapGetters(["categories"]),
  methods: mapMutations(["fetchCategories"]),
})
export default class createProduct extends Vue {
  @Prop() successMessage!: any;
  private product = {
    name: "",
    category_id: "",
    hmotnost: "",
  };
  public errors = {};
  loading?: Boolean = false;

  created() {
    this.$store.dispatch("fetchCategories");
  }

  createProduct() {
    this.errors = [];
    this.loading = true;
    this.axios
      .post("/product", this.product, {})
      .then((res) => {
        this.loading = false;
        this.successMessage = res.data[0];
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status == 404) {
          this.errors = error.response.data.errors;
        }
        this.loading = false;
      });
  }
}
</script>
