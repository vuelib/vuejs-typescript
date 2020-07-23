<template>
  <main class="flex justify-center">
    <div class="h-full w-full mt-5" v-if="loading">
      <div class="loading"></div>
    </div>
    <slot v-else></slot>
  </main>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "box"
})
export default class Box extends Vue {
  @Prop() readonly title!: String;
  @Prop({ default: false, type: Boolean }) readonly loading!: Boolean;
  created() {
    this.loading;
  }
}
</script>
<style>
</style>
