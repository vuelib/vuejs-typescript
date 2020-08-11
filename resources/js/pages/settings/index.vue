<template>
  <Container :loading="loadComponent">
    <Sidebar name="Nastavení" :items="links" type="name" :renderHTML="renderHTML" :param="setParam"></Sidebar>
    <transition mode="out-in" name="component-fade">
      <router-view />
    </transition>
  </Container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
  name: "allOrders",
})
export default class allOrders extends Vue {
  @Prop() successMessage?: String;
  errors!: [];
  loadComponent?: Boolean = false;

  links?: any = [
    { name: "Změnit kontaktní údaje", link: "ChangeContact" },
    { name: "Změnit heslo", link: "ChangePassword" },
    { name: "Odhlásit se", link: "logout" },
  ];
  setParam = (route) => {
    return { name: route.link };
  };

  renderHTML = (link) => link.name;

  beforeMount() {
    this.loadComponent = true;
  }

  mounted() {
    this.loadComponent = false;
  }
}
</script>
