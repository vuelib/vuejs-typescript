<template>
  <div :class="theme">
    <Navbar />
    <div class="container mx-auto">
      <child />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Nav/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "MainLayout",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  created() {
    if(this.loggedIn) this.$store.dispatch('getUser')
  }
};
</script>
