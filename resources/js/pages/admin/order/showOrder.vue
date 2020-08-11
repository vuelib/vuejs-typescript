<template>
  <Content :title="`Objednávka č. ${order.id}`">
    <tableOrderList :loading="loadComponenct" />
    <div class="table w-full mt-5">
      <customTextarea
        v-if="order.status === 'rozpracovaná'"
        v-model="order.description"
        :error="errors.description"
        :rows="1"
        label="Vaše poznámka"
        name="description"
      />
      <div v-else v-show="order.description" class="p-3">
        <span class="font-bold">Poznámka:</span>
        {{order.description}}
      </div>
      <div class="flex">
        <customFormButton
          name="Potvrdit"
          :loading="loading"
          :onClick="confirmOrder"
          v-if="order.status === 'rozpracovaná'"
        />
        <customFormButton name="Vytvořit znovu" :loading="loading" :onClick="createSame" v-else />
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
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
  name: "shoOrder",
  methods: mapMutations(["fetchOrder"]),
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
    this.$router.push({ name: "user", params: { id: this.$route.params.id } });
  }

  createSame() {
    let amounts = this.order.amounts.map((a) => {
      return { value: a.value, id: a.product.id };
    });
    this.loading = true;
    this.$store
      .dispatch("addOrder", { amounts, user_id: this.$route.params.id })
      .then((order) => {
        this.loading = false;
        this.$router.push({
          name: "showOrder",
          params: { idc: order.id },
        });
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
