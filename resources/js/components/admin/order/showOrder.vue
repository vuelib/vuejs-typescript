<template>
  <Content :title="`Objednávka č. ${order.id}`">
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
      {{order.description}}
      <customFormButton name="Vytvořit znovu" :loading="loading" :onClick="createSame" />
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Content from "../../common/content.vue";
import tableHead from "../../common/tableHead.vue";
import tableOrderList from "../../order/tableOrderList.vue";
import customTextarea from "../../common/formTextarea.vue";
import customFormButton from "../../common/formButton.vue";
@Component({
  name: "shoOrder",
  components: {
    Content,
    tableHead,
    tableOrderList,
    customTextarea,
    customFormButton,
  },
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
  fetchOrder(idc) {
    this.loadComponenct = true;
    this.$store.dispatch("fetchOrder", this.idc).then((res) => {
      this.loadComponenct = false;
    });
  }
}
</script>
