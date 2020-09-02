<template>
  <Content
    :title="`Objednávka č. <span class='text-junglegreen'> ${order.id} </span> ${order.status === 'potvrzena' ? 'je potvrzena' : ''}`"
  >
    <tableOrderList :loading="loadComponenct" />
    <div class="table w-full mt-5">
      <FormTextarea
        v-if="order.status === 'rozpracovaná'"
        v-model="order.description"
        :error="errors.description"
        :rows="1"
        label="Vaše poznámka"
        name="description"
      />
      <div v-else v-show="order.description" class="p-3">
        <span class="font-bold">Poznámka:</span>
        {{ order.description }}
      </div>
      <div class="flex">
        <FormButton
          name="Potvrdit"
          :loading="loading"
          :onClick="confirmOrder"
          v-if="order.status === 'rozpracovaná'"
        />
        <FormButton name="Vytvořit znovu" :loading="loading" :onClick="createSame" v-else />
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
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import tableOrderList from "../../order/tableOrderList.vue";
import { ADD_ORDER } from "../../../state/mutations-types";
@Component({
  name: "shoOrder",
  middleware: ["auth", "admin"],
  methods: mapMutations(["fetchOrder"]),
  components: {
    tableOrderList,
  },
})
export default class shoOrder extends Vue {
  @Prop() idc?: String;
  loading?: Boolean = false;
  loadComponenct?: Boolean = false;
  errors?: any = [];

  get order() {
    return this.$store.getters.order;
  }

  confirmOrder() {
    this.$store.dispatch("confirmOrder", this.order);
  }

  editOrder() {
    this.$router.push({
      name: "editOrder",
      params: { idc: this.order.id },
    });
  }

  deleteOrder() {
    this.$store.dispatch("deleteOrder", this.order);
    this.$router.push({
      name: "user",
      params: { id: this.$route.params.id },
    });
  }

  async createSame() {
    let amounts = this.order.amounts.map((a) => {
      return { value: a.value, id: a.product.id };
    });
    this.loading = true;
    const order = { amounts, user_id: this.$route.params.id };
    const { data: res } = await this.axios.post("order", order);
    this.$store.commit(ADD_ORDER, res);
    this.loading = false;
    this.$router.push({
      name: "showOrder",
      params: { idc: res.id },
    });
  }

  @Watch("$route", { immediate: true, deep: true })
  fetchOrder(idc) {
    this.loadComponenct = true;
    this.$store.dispatch("fetchOrder", this.idc).then((res) => {
      this.loadComponenct = false;
    });
  }
}
</script>
