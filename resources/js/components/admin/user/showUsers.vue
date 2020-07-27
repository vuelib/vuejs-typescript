<template>
  <Container :loading="loading">
    <Content title="Přehled všech uživatelů">
      <div class="mb-3">
        <button
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          :class="{ active: filter == 'all' }"
          @click="changeFilter('all')"
        >Všichni zakazníci</button>
        <button
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          :class="{ active: filter == 'active' }"
          @click="changeFilter('withinvoice')"
        >S fakturačními údajy</button>
        <button
          class="bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
          :class="{ active: filter == 'completed' }"
          @click="changeFilter('withoutinvoice')"
        >
          Bez fakturačních
          údajů
        </button>
      </div>
      <div class="table">
        <table class="table-fixed">
          <thead>
            <tr>
              <th>Název firmy</th>
              <th>IC</th>
              <th>DIC</th>
              <th>Email</th>
              <th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="user.id" v-for="user in allUsersFiltered">
              <td class="border text-center py-2">
                <router-link
                  :to="{ name: 'user', params: {id:user.id } }"
                >{{user.invoice ? user.invoice.nazev : 'NaN'}}</router-link>
              </td>
              <td class="border text-center p-2">
                <router-link
                  :to="{ name: 'user', params: {id:user.id } }"
                >{{user.invoice ? user.invoice.ic : 'NaN'}}</router-link>
              </td>
              <td class="border px-4 py-2">
                <router-link
                  :to="{ name: 'user', params: {id:user.id } }"
                >{{user.invoice ? user.invoice.dic : 'NaN'}}</router-link>
              </td>
              <td class="border text-center">
                <router-link :to="{ name: 'user', params: {id:user.id } }">{{user.email}}</router-link>
              </td>
              <td class="border text-center">
                <router-link :to="{ name: 'user', params: {id:user.id } }">{{user.phone}}</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Content>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Container from "../../common/container.vue";
import Content from "../../common/content.vue";
@Component({
  name: "allUsers",
  components: {
    Container,
    Content,
  },
  computed: mapGetters(["allUsersFiltered"]),
  methods: mapMutations(["allUsers"]),
})
export default class allUsers extends Vue {
  get filter() {
    return this.$store.state.filterUsers;
  }
  loading?: Boolean = false;
  created() {
    this.loading = true;
    this.$store.dispatch("allUsers").then((response) => {
      this.loading = false;
    });
  }
  changeFilter(filter) {
    this.$store.commit("updateFilter", filter);
  }
}
</script>
