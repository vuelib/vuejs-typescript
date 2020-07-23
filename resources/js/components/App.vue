<template>
  <div :class="theme">
    <navbar />
    <sidebar />
    <shortcut-links />
    <router-view />
    <footerC />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import navbar from "./src/navbar.vue";
import sidebar from "./src/sidebar.vue";
import shortcutLinks from "./src/shortcutLinks.vue";
import footerC from "./src/foot.vue";
import { mapGetters, mapMutations } from "vuex";
@Component({
  components: {
    navbar,
    sidebar,
    shortcutLinks,
    footerC
  },
  computed: mapGetters(["auth", "theme"]),
  methods: mapMutations(["getUser"])
})
export default class App extends Vue {
  getUser!: () => void;
  get loggedIn() {
    return this.$store.getters.loggedIn;
  }
  get thene() {
    return this.$store.getters.thene;
  }
  created(): void {
    this.loggedIn ? this.$store.dispatch("getUser") : "";
  }
}
</script>
