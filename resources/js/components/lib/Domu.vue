<template>
  <Container>
    <Box title="O mě" class="w-2/4">
      <p>Ulehčují kuchařům práci, Dodávám potraviny vysoké kvality.</p>O mě
      <p>
        Již několik let se zabývám distribucí konvenientnich potravin pro gastrozarizeni. Dodávám širokou škálu výrobku od několika mezinárodních výrobců.
        Jedna se o koncentrované sypké směsi a pasty vhodné pro přípravu polévek, zeleninových základů a omáček. Dále také různé druhy příloh jako jsou těstoviny, rýže či luštěniny.
      </p>Výrobky obsahují čerstvě zpracované přírodní suroviny jako je zelenina, bylinky, koření či mořská jodidovaná sůl.
      <p>
        Při výrobě je kladen důraz na šetrné zpracování základních potravin při použití nejmodernějších technologií, tak aby bylo dosaženo nejvyšší kvality.
        Mezi hlavní odběratele se řadí školní jídelny, kuchyně a vývařovny zdravotních zařízení např, nemocnice, domy s pečovatelskou službou a mnoho dalších.
      </p>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Box from "../common/box.vue";
import Container from "../common/container.vue";
@Component({
  name: "home",
  components: {
    Box,
    Container,
  },
})
export default class home extends Vue {
  @Prop() dataSuccessMessage!: any;
}
</script>
