<template>
  <main class="bg-darkergreen">
    <div class="w-full relative p-10 bg-darkergreen flex justify-center items-center">
      <img class="z-10 w-1/4 -ml-6" src="/storage/images/kosile.jpg" alt />
      <div class="z-10 ml-6 mt-40 font-bold text-button leading-none text-7xl">
        <span>
          Miroslav
          <br />Šotola
        </span>
        <div>
          <div class="text-2xl text-secondary mt-10">Ulehčuji kuchařům práci.</div>
          <div>
            <router-link :to="{ name: 'kontakt' }" class="text-2xl">Kontaktujte mně</router-link>
          </div>
        </div>
      </div>
      <div class="z-0 -mr-16 absolute border-4 border-lightblue h-64 bg-lightblue w-3/6"></div>
    </div>
    <div class="bg-lightblue w-full p-4">
      <div class="w-full flex flex-wrap justify-center items-center">
        <div class="ml-6 text-button w-2/6 text-3xl">
          <div class="text-xl text-secondary">
            <div class="font-bold w-full text-left text-button text-3xl">Kdo jsem?</div>
            <div
              class="w-full -ml-6 pl-6 pt-1 pb-1 h-10 bg-button text-primary"
            >Dodávám potraviny vysoké kvality.</div>
            <div class="pr-5 text-justify">
              <p class="mt-2">
                Již několik let se zabývám distribucí konvenientnich
                potravin pro gastrozarizeni. Dodávám širokou škálu
                výrobku od několika mezinárodních výrobců. Jedna se o
                koncentrované sypké směsi a pasty vhodné pro přípravu
                polévek, zeleninových základů a omáček. Dále také různé
                druhy příloh jako jsou těstoviny, rýže či luštěniny.
              </p>
              <p class="mt-2">
                Výrobky obsahují čerstvě zpracované přírodní suroviny
                jako je zelenina, bylinky, koření či mořská jodidovaná
                sůl.
              </p>
              <p class="mt-2">
                Při výrobě je kladen důraz na šetrné zpracování
                základních potravin při použití nejmodernějších
                technologií, tak aby bylo dosaženo nejvyšší kvality.
                Mezi hlavní odběratele se řadí školní jídelny, kuchyně a
                vývařovny zdravotních zařízení např, nemocnice, domy s
                pečovatelskou službou a mnoho dalších.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/6 mt-4">
          <img src="/storage/images/retusovane.jpg" alt />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Home",
  middleware: "guest",
})
export default class Home extends Vue {
  metaInfo() {
    return { title: "Hlavní stránka" };
  }
}
</script>
