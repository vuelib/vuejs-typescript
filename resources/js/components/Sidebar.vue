<template>
  <aside class="sidebar">
    <div class="name flex justify-center">
      {{ name }}
      <div class="block ml-2 md:hidden" @click="visible = !visible">
        <i class="text-black cursor-pointer fa fa-bars"></i>
      </div>
    </div>
    <div class="block md:hidden">
      <div v-show="visible" class="absolute h-screen bg-black top-0 right-0 opacity-75">
        <slot />
        <div v-if="routerLink === true" @click="visible = !visible">
          <router-link
            v-for="item in items"
            v-bind:key="item[_key]"
            class="link block"
            :to="param(item)"
          >
            <span class v-html="renderHTML(item)">{{ item[type] }}</span>
          </router-link>
        </div>
        <div v-else>
          <div v-bind:key="item[_key]" v-for="item in items">
            <div class="link" v-on:click="onSelect(item)">{{ item[type] }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="menu">
        <slot />
        <div v-if="routerLink === true">
          <router-link
            v-for="item in items"
            v-bind:key="item[_key]"
            class="link block"
            :to="param(item)"
          >
            <span class v-html="renderHTML(item)">{{ item[type] }}</span>
          </router-link>
        </div>
        <div v-else>
          <div v-bind:key="item[_key]" v-for="item in items">
            <div class="link" v-on:click="onSelect(item)">{{ item[type] }}</div>
          </div>
        </div>
      </div>
    </div>
    <slot name="bottom" />
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Sidebar",
})
export default class Sidebar extends Vue {
  @Prop({ required: true, type: String }) readonly name!: String;
  @Prop({ default: true, type: Boolean }) readonly routerLink!: Boolean;
  @Prop({ required: true }) readonly items!: Array<any>;
  @Prop({ default: "name" }) readonly type!: String;
  @Prop({ default: "id" }) readonly _key!: String;
  @Prop() readonly onSelect?: Function;
  @Prop() readonly renderHTML?: Function;
  @Prop() param?: Function;
  public visible = false;
}
</script>
