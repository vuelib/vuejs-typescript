<template>
  <div class="md:flex">
    <Sidebar />
    <div
      class="container justify-center flex flex-wrap mt-5"
      v-if="['zbozi'].includes($route.name)"
    >
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
                            params: { id: category.id, slug: url_slug(category.name) }
                        }"
            class
          >
            <div class="w-full h-full absolute bg-black opacity-0 hover:opacity-0 cursor-pointer"></div>
            <div class="text-xl text-junglegreen font-bold">{{ category.name }}</div>
            <img :src="category.imagePath" />
          </router-link>
        </div>
        <div v-if="isAdmin">
          <router-link
            :to="{ name: 'editCategory', params: {id: category.id} }"
            class="inline-block bg-blue-600 hover:bg-blue-800 text-sm font-semibold w-full text-white p-2 text-center"
          >Upravit</router-link>
          <a
            @click="deleteCategory(category.id)"
            class="inline-block bg-red-600 hover:bg-red-800 text-sm font-semibold w-full text-white p-2 text-center"
          >Odstranit</a>
        </div>
      </div>
    </div>
    <transition v-else mode="out-in" name="component-fade">
      <router-view />
    </transition>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "box"
})
export default class Box extends Vue {
  @Prop() readonly title!: String;
}
</script>

