<template>
  <aside class="sidebar">
    <div class="flex">
      <div class="name w-4/6 md:w-full pt-2 md:pt-0">{{ name }}</div>
    </div>
    <div class="menu block">
      <slot />
      <div v-if="routerLink === true">
        <router-link
          v-for="item in items"
          v-bind:key="item[_key]"
          class="link block"
          :to="param(item)"
        >{{ item[type] }}</router-link>
      </div>
      <div v-else>
        <div v-bind:key="item[_key]" v-for="item in items">
          <div class="link" v-on:click="onSelect(item)">{{ item[type] }}</div>
        </div>
      </div>
    </div>
    <slot name="bottom" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Sidebar"
})
export default class Sidebar extends Vue {
  @Prop({ required: true, type: String }) readonly name!: String;
  @Prop({ default: true, type: Boolean }) readonly routerLink!: Boolean;
  @Prop({ required: true }) readonly items!: Array<any>;
  @Prop({ default: "name" }) readonly type!: String;
  @Prop({ default: "id" }) readonly _key!: String;
  @Prop() readonly onSelect?: Function;
  @Prop() param?: Function;
}
</script>
