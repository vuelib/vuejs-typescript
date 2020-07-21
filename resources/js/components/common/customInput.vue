<template>
  <input
    class="form-control text-center"
    :id="name"
    :name="name"
    :type="type"
    :autofocus="autofocus"
    autocorrect="off"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Input"
})
export default class Input extends Vue {
  @Prop({ required: true }) value!: String;
  @Prop({ required: true }) readonly name!: String;
  @Prop({ default: false }) readonly autofocus?: Boolean;
  @Prop({ default: "text", type: String }) readonly type?: String;
  @Prop({ default: "E-mail", type: String }) readonly label!: String;
}
</script>

