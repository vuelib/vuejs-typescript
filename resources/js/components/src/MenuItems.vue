<template>
  <div class="flex flex-1 justify-end px-2">
    <ul
      class="list-reset flex justify-between flex-1 md:flex-none items-center font-bold"
      v-if="loggedIn"
    >
      <li class="flex-1 md:flex-none" v-bind:key="index" v-for="(link, index) in loogedInlinks">
        <router-link
          :to="{ name: link.route }"
          class="inline-block py-2 px-4 no-underline bg-junglegreen"
        >{{link.name}}</router-link>
      </li>
      <li class="flex-1 md:flex-none md:mr-3 bg-junglegreen">
        <div class="relative inline-block m-2">
          <button
            class="drop-button focus:outline-none font-bold"
            onclick="toggleDD('myDropdown')"
            v-if="user"
          >
            {{user.invoice ?
            user.invoice.nazev : user.email}}
            <svg
              class="h-3 fill-current inline"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <div
            class="dropdownlist absolute bg-button right-0 mt-3 p-3 overflow-auto z-30 invisible"
            id="myDropdown"
          >
            <router-link
              :to="{ name: 'settings'}"
              class="p-2 hover:bg-gray-800 text-sm no-underline hover:no-underline block"
            >Nastavení</router-link>
            <div
              @click.prevent="toggleTheme"
              class="p-2 hover:bg-gray-800 text-sm no-underline hover:no-underline block"
            >DarkMode</div>
            <div class="border border-bg-ivory"></div>
            <router-link
              :to="{ name: 'logout'}"
              class="p-2 hover:bg-gray-800 text-sm no-underline hover:no-underline block"
            >Odhlásit se</router-link>
          </div>
        </div>
      </li>
    </ul>
    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center font-bold" v-else>
      <li class="flex-1 md:flex-none" v-bind:key="index" v-for="(link, index) in links">
        <router-link
          :to="{ name: link.route }"
          class="inline-block py-2 px-4 no-underline bg-junglegreen"
        >{{link.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class MenuItems extends Vue {
  @Prop() readonly links!: Array<String>;
  @Prop() readonly user!: Array<String>;
  @Prop({ required: true }) readonly toggleTheme!: Function;
  @Prop({ default: false, type: Boolean }) readonly loggedIn!: Boolean;
}
</script>
