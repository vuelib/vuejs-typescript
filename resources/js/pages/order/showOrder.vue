<template>
  <Content :title="`Objednávka č. ${order.id}`">
    <userDetails :user="currentUser" />
    <tableOrderList :loading="loadComponenct" />
    <div v-if="order.status === 'rozpracovaná'" class="table w-full mt-5">
      <customTextarea
        v-model="order.description"
        :error="errors.description"
        :rows="1"
        label="Vaše poznámka"
        name="description"
      />
      <div class="flex">
        <customFormButton name="Potvrdit" :loading="loading" :onClick="confirmOrder" />
        <customFormButton
          classType="btn-edit"
          name="Upravit"
          class="ml-2"
          :loading="loading"
          :onClick="editOrder"
        />
        <customFormButton
          classType="btn-delete pl-1 pr-1 "
          name="Odstranit"
          class="ml-2"
          :loading="loading"
          :onClick="deleteOrder"
        />
      </div>
    </div>
    <div v-else class="table w-full mt-5">
      <div v-show="order.description" class="p-3">
        <span class="font-bold">Poznámka:</span>
        {{order.description}}
      </div>
      <customFormButton name="Vytvořit znovu" :loading="loading" :onClick="createSame" />
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import userDetails from "./userDetails.vue";
import tableOrderList from "./tableOrderList.vue";
@Component({
  name: "shoOrder",
  components: {
    userDetails,
    tableOrderList,
  },
  methods: mapMutations(["fetchOrder"]),
})
export default class shoOrder extends Vue {
  @Prop() id?: String;
  loading?: Boolean = false;
  loadComponenct?: Boolean = false;
  errors?: any = [];

  get order() {
    return this.$store.getters.order;
  }

  get currentUser() {
    return this.$store.getters.user;
  }

  confirmOrder() {
    this.$store.dispatch("confirmOrder", this.order);
  }

  editOrder() {
    this.$router.push({
      name: "EditOrder",
      params: { id: this.order.id },
    });
  }

  deleteOrder() {
    this.$store.dispatch("deleteOrder", this.order);
    this.$router.push({
      name: "Orders",
    });
  }

  createSame() {
    let amounts = this.order.amounts.map((a) => {
      return { value: a.value, id: a.product.id };
    });
    this.loading = true;
    this.$store.dispatch("addOrder", { amounts }).then((order) => {
      this.loading = false;
      this.$router.push({
        name: "ShowOrder",
        params: { id: order.id },
      });
    });
  }

  @Watch("$route", { immediate: true, deep: true })
  fetchOrder(id) {
    this.loadComponenct = true;
    this.$store.dispatch("fetchOrder", this.id).then((res) => {
      this.loadComponenct = false;
    });
  }
}
</script>
