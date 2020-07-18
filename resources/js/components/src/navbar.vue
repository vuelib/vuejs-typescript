<template>
  <div class="w-full bg-junglegreen shadow-lg">
    <nav class="pt-2 px-1 mt-0 container mx-auto w-full z-20 top-0 text-primary">
      <div class="flex flex-wrap">
        <logo />
        <menuItems
          :links="navbarlinks"
          :logged-in="loggedIn"
          :looged-inlinks="loogedInlinks"
          :toggle-theme="toggleTheme"
          :user="user"
        />
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";
import logo from "./Logo.vue";
import menuItems from "./MenuItems.vue";
@Component({
  components: {
    menuItems,
    logo
  },
  computed: mapGetters(["navbarlinks", "loogedInlinks", "loggedIn", "user"]),
  methods: mapMutations(["setTheme"])
})
export default class Nav extends Vue {
  THEME_DARK = "theme-dark";
  THEME_LIGHT = "theme-light";
  get theme(): string {
    return this.$store.state.theme;
  }
  set theme(value: string) {
    localStorage.setItem("theme", value);
    this.$store.commit("setTheme", value);
  }
  navbarlinks!: Array<String>;
  loogedInlinks!: Array<String>;
  user!: Array<String>;
  created(): void {
    this.theme = localStorage.getItem("theme") || this.THEME_LIGHT;
  }

  toggleTheme() {
    this.theme =
      this.theme === this.THEME_LIGHT ? this.THEME_DARK : this.THEME_LIGHT;
  }
}
</script>
