<template>
  <div class="main-layout">
    <Navbar />
    <div class="container mx-auto">
      <child />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Nav/Navbar.vue";
export default {
  name: "MainLayout",

  components: {
    Navbar,
  },
};
</script>
