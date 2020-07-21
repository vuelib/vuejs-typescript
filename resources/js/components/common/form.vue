<template>
  <form class="w-full max-w-lg">
    <div
      class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3"
      role="alert"
      v-if="succesMessage"
    >
      <p class="font-bold">{{succesMessage}}</p>
    </div>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Form"
})
export default class Form extends Vue {
  @Prop({}) readonly succesMessage?: String;
}
</script>

