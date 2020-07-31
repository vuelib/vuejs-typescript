<template>
  <button @click.prevent="onClick" :disabled="loading" :class="classType" type="submit">
    <span class="pl-2">
      <i v-show="loading" class="fa fa-spinner fa-spin"></i>
      {{name}}
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Button",
})
export default class Button extends Vue {
  @Prop({ default: "Potvrdit" }) readonly name!: String;
  @Prop({ default: "btn-custom" }) readonly classType!: String;
  @Prop({ required: true, default: false }) readonly loading!: Boolean;
  @Prop() readonly onClick!: Function;
}
</script>

