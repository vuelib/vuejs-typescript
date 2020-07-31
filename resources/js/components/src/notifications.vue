<template>
  <div
    v-show="visible"
    @mouseover="showNotification"
    @mouseleave="hideNotification"
    class="absolute shadow-xs text-sm h-130 dropdown-menu text-secondary w-86 bg-lightblue right-0 mr-8 mt-8 p-3 overflow-auto z-30"
  >
    <div
      class="p-2 no-underline rounded flex justify-between items-baseline hover:no-underline block"
    >
      <span class="text-x">Oznámení</span>
      <span class="hover:text-button font-normal cursor-pointer">Spravovat oznámení</span>
    </div>
    <div class="w-full relative bg-ivory rounded p-2 mt-2 h-40 cursor-pointer">
      <div class="absolute top-0 mt-1 mr-1 right-0 hover:color-button">
        <i class="fas fa-times"></i>
      </div>
      <router-link
        :to="{ name: 'settings'}"
        class="w-full bg-ivory"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione in animi ut, asperiores fugit aut sunt libero nemo eum maxime consequuntur repudiandae vero...</router-link>
    </div>
    <div class="w-full relative bg-ivory rounded p-2 mt-2 h-40 cursor-pointer">
      <div class="absolute top-0 mt-1 mr-1 right-0 hover:color-button">
        <i class="fas fa-times"></i>
      </div>
      <router-link
        :to="{ name: 'settings'}"
        class="w-full bg-ivory"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione in animi ut, asperiores fugit aut sunt libero nemo eum maxime consequuntur repudiandae vero...</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "notifications",
})
export default class notifications extends Vue {
  @Prop({ type: Boolean }) visible!: Boolean;
  showNotification() {
    this.visible = true;
  }
  hideNotification() {
    this.visible = false;
  }
  created() {
    // Echo.channel("orders").listen("OrderAdded", (e) => {
    //   console.log(e.order);
    //   this.$store.state.allOrders.unshift(e.order);
    //   // this.$store.commit("allOrders", e.orders);
    // });
  }
}
</script>
