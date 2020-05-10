<template>
  <div class="container">
    <div class="row d-flex">
      <div class="flex justify-center">
        <div class="w-full">Nadpis</div>
      </div>

      <div class="col-lg-9">
        <div class="relative">
          <div>Uvodni stranka</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Domu",
  computed: {
    theme() {
      return this.$store.getters.theme;
    }
  }
};
</script>
