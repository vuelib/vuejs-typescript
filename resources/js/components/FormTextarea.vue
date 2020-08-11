<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <label class="label lg:justify-start relative" :for="name">
        {{label}}
        <div
          class="ml-2 hidden bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full"
        >{{tooltip}}</div>
      </label>
      <textarea
        class="form-control"
        :id="name"
        :name="name"
        :type="type"
        :autofocus="autofocus"
        autocorrect="off"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :cols="cols"
        :rows="rows"
      ></textarea>
      <p class="error" v-if="error">{{error[0]}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Input",
})
export default class Input extends Vue {
  @Prop({ required: true }) value!: String;
  @Prop({ default: String }) tooltip!: String;
  @Prop({ required: true }) readonly name!: String;
  @Prop({ default: false }) readonly autofocus?: Boolean;
  @Prop({ required: true }) readonly error!: Object;
  @Prop({ default: "text", type: String }) readonly type?: String;
  @Prop({ default: "E-mail", type: String }) readonly label!: String;
  @Prop({ default: 30, type: Number }) readonly cols!: Number;
  @Prop({ default: 6, type: Number }) readonly rows!: Number;
}
</script>

