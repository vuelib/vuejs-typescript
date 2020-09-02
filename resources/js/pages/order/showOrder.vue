<template>
  <Content
    :title="`Objednávka č. ${order.id} ${order.status === 'potvrzena' ? 'je potvrzena' : ''}`"
  >
    <!-- <userDetails :user="user" /> -->
    <tableOrderList :loading="loadComponenct" />
    <div v-if="order.status === 'rozpracovaná'" class="table w-full mt-5">
      <FormTextarea
        v-model="order.description"
        :error="errors.description"
        :rows="1"
        label="Vaše poznámka"
        name="description"
      />
      <div class="flex">
        <FormButton name="Potvrdit" :loading="loading" :onClick="confirmOrder" />
        <FormButton
          classType="btn-edit"
          name="Upravit"
          class="ml-2"
          :loading="loading"
          :onClick="editOrder"
        />
        <FormButton
          classType="btn-delete pl-1 pr-1 "
          name="Odstranit"
          class="ml-2"
          :loading="loading"
          :onClick="deleteOrder"
        />
      </div>
    </div>
    <div v-else class="w-full ml-3 mt-5">
      <div v-show="order.description" class="p-3">
        <span class="font-bold">Poznámka:</span>
        {{order.description}}
      </div>
      <FormButton name="Vytvořit znovu" :loading="loading" :onClick="createSame" />
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import { ADD_ORDER } from "../../state/mutations-types";
import userDetails from "./userDetails.vue";
import tableOrderList from "./tableOrderList.vue";
@Component({
  name: "shoOrder",
  middleware: ["auth", "customer"],
  components: {
    userDetails,
    tableOrderList,
  },
  computed: mapGetters(["user"]),
})
export default class shoOrder extends Vue {
  loading?: Boolean = false;
  loadComponenct?: Boolean = false;
  errors?: any = [];

  get order() {
    return this.$store.getters.order;
  }
  created() {
    this.getOrder(this.$route.params.id);
  }

  getOrder(id) {
    this.loadComponenct = true;
    this.$store.dispatch("fetchOrder", id).then((res) => {
      this.loadComponenct = false;
    });
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

  async createSame() {
    let amounts = this.order.amounts.map((a) => {
      return { value: a.value, id: a.product.id };
    });
    this.loading = true;
    const { data: order } = await this.axios.post("order", { amounts });
    await this.$store.commit(ADD_ORDER, order);
    this.loading = false;
    this.$router.push({
      name: "ShowOrder",
      params: { id: order.id },
    });
  }
}
</script>
