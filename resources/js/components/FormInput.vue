<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <label class="label lg:justify-start" :for="name">
        {{
        label
        }}
      </label>
      <input
        class="form-control"
        :id="name"
        :type="type"
        :autofocus="autofocus"
        autocorrect="off"
        v-bind:class="{ 'border-red-500': error }"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <p class="error" v-if="error">{{ error[0] }}</p>
      <has-error v-if="form != ''" :form="form" class="error" :field="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Input",
})
export default class Input extends Vue {
  @Prop({ required: false, default: "" }) form?: any;
  @Prop({ required: true }) value!: String;
  @Prop({ required: true }) readonly name!: String;
  @Prop({ default: false }) readonly autofocus?: Boolean;
  @Prop({ required: false }) readonly error!: Object;
  @Prop({ default: "text", type: String }) readonly type?: String;
  @Prop({ default: "E-mail", type: String }) readonly label!: String;
}
</script>
