<template>
  <Content :title="`Objednávka č. ${order.id}`">
    <userDetails />
    <tableOrderList :loading="loadComponenct" />
    <div class="table w-full mt-5">
      <customTextarea
        v-model="order.description"
        :error="errors.description"
        :rows="1"
        label="Vaše poznámka"
        name="description"
      />
      <div class="flex">
        <customFormButton name="Potvrdit" :loading="loading" :onClick="confirmOrder" />
        <customFormButton name="Upravit" class="ml-2" :loading="loading" :onClick="editOrder" />
        <customFormButton name="Odstranit" class="ml-2" :loading="loading" :onClick="deleteOrder" />
      </div>
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import Content from "../common/content.vue";
import tableHead from "../common/tableHead.vue";
import userDetails from "./userDetails.vue";
import tableOrderList from "./tableOrderList.vue";
import customTextarea from "../common/formTextarea.vue";
import customFormButton from "../common/formButton.vue";
@Component({
  name: "shoOrder",
  components: {
    Content,
    tableHead,
    userDetails,
    tableOrderList,
    customTextarea,
    customFormButton
  },
  methods: mapMutations(["fetchOrder"])
})
export default class shoOrder extends Vue {
  @Prop() id?: String;
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
      params: { id: this.order.id }
    });
  }

  deleteOrder() {
    this.$store.dispatch("deleteOrder", this.id);
    this.$router.push({
      name: "Orders"
    });
  }

  @Watch("$route", { immediate: true, deep: true })
  fetchOrder(id) {
    this.loadComponenct = true;
    this.$store.dispatch("fetchOrder", this.id).then(res => {
      this.loadComponenct = false;
    });
  }
}
</script>
