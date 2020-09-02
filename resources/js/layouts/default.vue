<template>
  <div :class="theme">
    <Navbar />
    <Child />
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
  },
};
</script>
