<template>
  <Container :loading="loading">
    <Content title="Přehled všech uživatelů">
      <div class="mb-3">
        <button
          class="btn-edit-trans"
          :class="{ active: filter == 'all' }"
          @click="changeFilter('all')"
        >Všichni zakazníci</button>
        <button
          class="btn-edit-trans"
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
        <Table
          :columns="columns"
          :data="allUsers.data"
          :sortColumn="sortColumn"
          :actions="actions"
          :onSort="handleSort"
        />
        <!-- <table class="w-full">
          <thead>
            <tr>
              <th>IC</th>
              <th>Název firmy</th>
              <th>Email</th>
              <th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="user.id" v-for="user in allUsers.data" class="cursor-pointer">
              <td class="border text-left py-2 px-2">{{user.invoice ? user.invoice.ic : 'NaN'}}</td>
              <td class="border text-left py-2 px-2">{{user.invoice ? user.invoice.nazev : 'NaN'}}</td>
              <td class="border text-left py-2 px-2">{{user.email}}</td>
              <td class="border text-left py-2 px-2">{{user.phone}}</td>
              <td class="border text-center py-2 px-2" @click="goToUserProfile(user)">Přejít</td>
            </tr>
          </tbody>
        </table>-->
        <Pagination :rangeRequired="true" :items="allUsers" />
      </div>
    </Content>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Container from "../../common/container.vue";
import Content from "../../common/content.vue";
import Pagination from "../../common/Pagination.vue";
import Table from "../../common/table.vue";
@Component({
  name: "allUsers",
  components: {
    Container,
    Content,
    Pagination,
    Table,
  },
  computed: mapGetters(["allUsers"]),
  methods: mapMutations(["fetchUsers"]),
})
export default class allUsers extends Vue {
  get filter() {
    return this.$store.getters.filterUsers;
  }
  loading?: Boolean = false;
  get columns() {
    const columns = [
      { path: "email", label: "Email" },
      { path: "phone", label: "Telefon" },
    ];
    if (this.filter !== "withoutinvoice") {
      return [
        { path: "invoice.ic", label: "IČ" },
        { path: "invoice.nazev", label: "Název firmy" },
        ...columns,
      ];
    }
    return columns;
  }
  actions = [
    {
      renderHTML: (user) => {
        return `<i class="fa fa-eye" aria-hidden="true"></i>`;
      },
      param: (user) => {
        return { name: "user", params: { id: user.id } };
      },
    },
  ];
  sortColumn?: any = { path: "id", order: "asc" };
  handleSort = (sortColumn) => {
    console.log(sortColumn);
    this.sortColumn = sortColumn;
  };
  created() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.loading = true;
    this.$store.dispatch("fetchUsers", 1).then((response) => {
      this.loading = false;
    });
  }
  changeFilter(filter) {
    this.$store.commit("setFilterUsers", filter);
    this.fetchUsers();
  }
}
</script>
