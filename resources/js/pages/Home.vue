<template>
  <main class="bg-darkergreen">
    <div style="height: 83vh;" class="w-full bg-darkergreen flex justify-center items-center">
      <div class="font-bold text-button leading-none text-7xl">
        <span>
          Miroslav
          <br />Šotola
        </span>
        <div class="text-2xl text-secondary mt-10">tel. 607 061 065</div>
      </div>
      <img
        class="w-1/3 ml-6"
        src="https://barbertrend.com/wp-content/uploads/2017/01/man-with-grey-beard.jpg"
        alt
      />
    </div>
    <div class="bg-button w-full">
      <div class="p-6 text-primary font-bold text-center text-4xl">Ulehčují kuchařům práci.</div>
    </div>
    <div class="w-full mt-10 bg-darkergreen flex flex-auto justify-center pb-6">
      <img
        class="w-1/3 h-128"
        src="https://barbertrend.com/wp-content/uploads/2017/01/man-with-grey-beard.jpg"
        alt
      />
      <div class="ml-6 text-button w-1/4 text-3xl">
        <span class="font-bold">O mně</span>
        <div class="text-2xl text-secondary">
          <p class="mt-2">
            Již několik let se zabývám distribucí konvenientnich potravin pro gastrozarizeni. Dodávám širokou škálu výrobku od několika mezinárodních výrobců.
            Jedna se o koncentrované sypké směsi a pasty vhodné pro přípravu polévek, zeleninových základů a omáček. Dále také různé druhy příloh jako jsou těstoviny, rýže či luštěniny.
          </p>
          <p
            class="mt-2"
          >Výrobky obsahují čerstvě zpracované přírodní suroviny jako je zelenina, bylinky, koření či mořská jodidovaná sůl.</p>
          <p class="mt-2">
            Při výrobě je kladen důraz na šetrné zpracování základních potravin při použití nejmodernějších technologií, tak aby bylo dosaženo nejvyšší kvality.
            Mezi hlavní odběratele se řadí školní jídelny, kuchyně a vývařovny zdravotních zařízení např, nemocnice, domy s pečovatelskou službou a mnoho dalších.
          </p>
        </div>
      </div>
    </div>
    <div class="p-6 text-button font-bold text-center text-3xl">Dodávám potraviny vysoké kvality.</div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Home",
})
export default class Home extends Vue {
  middleware = "guest";
  metaInfo() {
    return { title: "Hlavní stránka" };
  }
}
</script>
