<template>
  <router-link :to="{ name: {path} }" :class="className">{{name}}</router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "RouterLink"
})
export default class RouterLink extends Vue {
  @Prop({ required: true }) readonly path!: String;
  @Prop({ default: "routerLink" }) readonly className?: String;
  @Prop({ required: true }) readonly name!: String;
}
</script>

