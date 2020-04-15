<template>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="ares-label" :for="name">{{inputName}}</label>
      <input
        class="ares-input"
        :id="name"
        :type="type"
        v-bind:class="{ 'border-red-500': errors.ic }"
        v-model="aresData.ic"
      />
      <p class="text-red-500 text-xs italic" v-if="errors.ic">{{errors.ic[0]}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    labelName: String,
    inputName: String,
    model: Object,
    type: String
  }
};
</script>
