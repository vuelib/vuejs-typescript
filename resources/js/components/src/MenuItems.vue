<template>
  <div class="flex flex-1 justify-end px-2">
    <ul
      class="list-reset flex justify-between flex-1 md:flex-none items-center font-bold"
      v-if="loggedIn"
    >
      <li class="flex-1 md:flex-none" v-bind:key="index" v-for="(link, index) in loggedInlinks">
        <router-link
          :to="{ name: link.route }"
          class="inline-block py-2 px-4 no-underline bg-junglegreen"
        >{{link.name}}</router-link>
      </li>
      <li class="flex-1 md:flex-none md:mr-3 bg-junglegreen">
        <div class="relative flex w-20 text-2xl justify-end align-content-right">
          <button @click="visibleNotification = !visibleNotification" v-if="user">
            <i class="far focus:outline-none fa-envelope current text-darkergreen"></i>
          </button>
          <button class="ml-4 focus:outline-none" @click="visible = !visible" v-if="user">
            <i class="fas fa-bars"></i>
          </button>
          <div
            v-show="visible"
            @mouseover="showMenu"
            @mouseleave="hideMenu"
            class="absolute shadow-xs dropdown-menu text-secondary w-56 bg-lightblue right-0 mt-8 p-3 overflow-auto z-30"
          >
            <div
              class="p-2 hover:text-button text-sm no-underline hover:no-underline block cursor-pointer"
            >
              {{user.invoice ?
              user.invoice.nazev : user.email}}
            </div>
            <div class="border border-bg-ivory"></div>
            <router-link
              :to="{ name: 'settings'}"
              class="p-2 hover:text-button text-sm no-underline hover:no-underline block"
            >Nastavení</router-link>
            <div
              @click.prevent="toggleTheme"
              class="p-2 hover:text-button text-sm no-underline cursor-pointer hover:no-underline block"
            >DarkMode</div>
            <div class="border border-bg-ivory"></div>
            <router-link
              :to="{ name: 'logout'}"
              class="p-2 hover:text-button text-sm no-underline hover:no-underline block"
            >Odhlásit se</router-link>
          </div>
          <notifications :visible="visibleNotification" />
        </div>
      </li>
    </ul>
    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center font-bold" v-else>
      <li class="flex-1 md:flex-none" v-bind:key="index" v-for="(link, index) in links">
        <router-link
          :to="{ name: link.route }"
          class="inline-block py-2 px-4 no-underline bg-junglegreen"
        >{{link.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import notifications from "./notifications.vue";

@Component({
  components: {
    notifications,
  },
})
export default class MenuItems extends Vue {
  @Prop() readonly links!: Array<String>;
  @Prop() readonly user!: Array<String>;
  @Prop() readonly loggedInlinks!: Array<String>;
  @Prop({ default: false, type: Boolean }) readonly loggedIn!: Boolean;
  private visible?: Boolean = false;
  private visibleNotification?: Boolean = false;
  showMenu() {
    this.visible = true;
  }
  hideMenu() {
    this.visible = false;
  }
  THEME_DARK = "theme-dark";
  THEME_LIGHT = "theme-light";
  get theme(): string {
    return this.$store.getters.theme;
  }
  set theme(value: string) {
    localStorage.setItem("theme", value);
    this.$store.commit("setTheme", value);
  }
  created(): void {
    this.theme = localStorage.getItem("theme") || this.THEME_LIGHT;
  }
  toggleTheme() {
    this.theme =
      this.theme === this.THEME_LIGHT ? this.THEME_DARK : this.THEME_LIGHT;
  }
}
</script>
