<template>
  <div :class="theme">
    <navbar />
    <sidebar />
    <shortcutLinks />
    <main class="flex justify-center">
      <router-view />
    </main>
    <foot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import navbar from "./src/navbar.vue";
import sidebar from "./src/sidebar.vue";
import shortcutLinks from "./src/shortcutLinks.vue";
import foot from "./src/foot.vue";
import { mapGetters, mapMutations } from "vuex";
@Component({
  components: {
    navbar,
    sidebar,
    shortcutLinks,
    foot
  },
  computed: mapGetters(["auth", "theme"]),
  methods: mapMutations(["getUser"])
})
export default class App extends Vue {
  loggedIn!: boolean;
  theme!: String;
  getUser!: () => void;

  created(): void {
    this.loggedIn ? this.$store.dispatch("getUser") : "";
  }
}
</script>
