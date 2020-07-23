<template>
  <div class="lg:w-130">
    <div class="header">
      <h3>{{title}}</h3>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Content"
})
export default class Content extends Vue {
  @Prop() readonly title!: String;
}
</script>

