<template>
  <div class="table w-full mb-4">
    <div
      class="text-xl font-bold font-sans px-2 cursor-pointer"
      v-on:click="visible = !visible"
    >Kontaktí údaje</div>
    <div class="flex justify-around p-2" v-if="user.invoice" v-show="visible">
      <div class="w-50">
        <div>
          <span class="font-bold">Název:</span>
          <span class="text-junglegreen font-semibold">{{ user.invoice.nazev }}</span>
        </div>
        <div>
          <span class="font-bold">Email:</span>
          {{ user.email }}
        </div>
        <div>
          <span class="font-bold">Telefon:</span>
          {{ user.phone }}
        </div>
        <div>
          <span class="font-bold">IČ:</span>
          <span class="text-junglegreen font-semibold">{{ user.invoice.ic }}</span>
        </div>
        <div v-if="user.invoice.dic">
          <span class="font-bold">DIČ:</span>
          <span class="text-junglegreen font-semibold">{{ user.invoice.dic }}</span>
        </div>
      </div>
      <div class="w-50">
        <div>
          <span class="font-bold">Ulice:</span>
          {{ user.invoice.ulice }}
        </div>
        <div>
          <span class="font-bold">Město:</span>
          {{ user.invoice.mesto }}
        </div>
        <div>
          <span class="font-bold">PSČ:</span>
          {{ user.invoice.psc }}
        </div>
        <div>
          <span class="font-bold">Země:</span>
          {{ user.invoice.zeme }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  name: "userDetail",
})
export default class userDetail extends Vue {
  @Prop({ required: true }) user;
  visible?: Boolean = false;
}
</script>
