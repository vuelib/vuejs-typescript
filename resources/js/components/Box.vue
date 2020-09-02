<template>
  <div class="boxContainer justify-center d-flex">
    <div class="w-full shadow-2xl bg-white lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{title}}</h1>
        <div class="mx-auto lg:mx-0 w-100 pt-3 border-b-2 border-button opacity-25"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "box",
})
export default class Box extends Vue {
  @Prop() readonly title!: String;
}
</script>

