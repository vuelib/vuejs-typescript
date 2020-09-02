<template>
  <Container>
    <Sidebar
      name="Kategorie"
      :items="categories"
      :param="setParam"
      :renderHTML="renderHTML"
      v-if="!['zbozi'].includes($route.name)"
    />
    <div v-else class="container mt-5">
      <div
        class="bg-primary w-full border-t border-b text-center border-junglegreen text-success md:px-4 md:py-3"
        v-if="successMessage"
      >
        <p class="font-bold">{{ successMessage }}</p>
      </div>
      <div class="m-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          class="w-full m-0 md:m-2 lg:m-2"
          v-bind:key="category.id"
          v-for="category in categories"
        >
          <div class="relative">
            <router-link
              :to="{
                name: 'category_show',
                params: {
                    id: category.id,
                    slug: setSlug(category.name)
                }
            }"
            >
              <div class="w-full h-full absolute bg-black opacity-0 hover:opacity-0 cursor-pointer"></div>
              <div class="lg:text-xl lg text-secondary font-bold">{{ category.name }}</div>
              <img class="object-cover h-64 w-full" :src="`/storage/${category.imagePath}`" />
            </router-link>
          </div>
          <div v-show="loggedIn && admin">
            <router-link
              :to="{
                            name: 'editCategory',
                            params: { id: category.id }
                        }"
              class="btn-edit w-full inline-block text-center"
            >Upravit</router-link>
            <a
              @click="deleteCategory(category.id)"
              class="btn-delete w-full inline-block text-center"
            >Odstranit</a>
          </div>
        </div>
      </div>
    </div>
    <transition mode="out-in" name="component-fade">
      <router-view />
    </transition>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
const { urlSlug } = require("../../utils/urlSlug");
@Component({
  name: "AllCategories",
  computed: mapGetters(["categories", "loggedIn", "admin"]),
  methods: mapMutations(["fetchCategories"]),
})
export default class AllCategories extends Vue {
  @Prop() successMessage?: String;
  errors!: [];

  created(): void {
    this.$store.dispatch("fetchCategories");
  }

  setParam = ({ id, name }) => {
    return {
      name: "category_show",
      params: {
        id,
        slug: this.setSlug(name),
      },
    };
  };

  renderHTML = (category) => {
    return category.name;
  };

  setSlug(name) {
    return urlSlug(name);
  }

  deleteCategory(id) {
    this.errors = [];
    this.successMessage = "";
    this.$store
      .dispatch("deleteCategory", id)
      .then((response) => {
        this.successMessage = "Úspěšně jste odstranili kategorii";
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      });
  }
}
</script>
