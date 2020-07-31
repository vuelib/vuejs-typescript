<template>
  <Container>
    <Sidebar
      name="Kategorie"
      :items="categories"
      :param="setParam"
      :renderHTML="renderHTML"
      v-if="!['zbozi'].includes($route.name)"
    />
    <div v-else class="container justify-center flex flex-wrap mt-5">
      <div
        class="bg-primary w-full border-t border-b text-center border-junglegreen text-success md:px-4 md:py-3"
        v-if="successMessage"
      >
        <p class="font-bold">{{ successMessage }}</p>
      </div>
      <div class="w-full md:w-1/4 m-2" v-bind:key="category.id" v-for="category in categories">
        <div class="relative w-30 h-30">
          <router-link
            :to="{
                name: 'category_show',
                params: {
                    id: category.id,
                    slug: setSlug(category.name)
                }
              }"
            class
          >
            <div class="w-full h-full absolute bg-black opacity-0 hover:opacity-0 cursor-pointer"></div>
            <div class="text-xl text-junglegreen font-bold">{{ category.name }}</div>
            <img :src="`/storage/${category.imagePath}`" />
          </router-link>
        </div>
        <div v-show="loggedIn">
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
    <transition mode="out-in" name="component-fade">
      <router-view />
    </transition>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Container from "../common/container.vue";
import Sidebar from "../common/sidebar.vue";
import { urlSlug } from "../../utils/urlSlug";
@Component({
  name: "AllCategories",
  components: {
    Container,
    Sidebar,
  },
  computed: mapGetters(["categories", "loggedIn"]),
  methods: mapMutations(["fetchCategories"]),
})
export default class AllCategories extends Vue {
  @Prop() successMessage?: String;
  errors!: [];

  created(): void {
    this.$store.dispatch("fetchCategories");
  }

  setParam = (category) => {
    return {
      name: "category_show",
      params: {
        id: category.id,
        slug: this.setSlug(category.name),
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
