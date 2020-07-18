<template>
  <button :disabled="loading" class="btn-custom" type="submit">
    <span class="loader" v-if="loading">Loading</span>
    <span class="pl-2">{{name}}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Button"
})
export default class Button extends Vue {
  @Prop({ default: "Potvrdit" }) readonly name!: String;
  @Prop({ required: true, default: false }) readonly loading!: Boolean;
}
</script>

