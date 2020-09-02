<template>
  <Container>
    <div class="table mt-3">
      <Content title="Přidat fakturační údaje">
        <Form :succesMessage="dataSuccessMessage" v-if="aresData.ic === ''">
          <FormInput v-model="user.ic" :error="errors.ic" label="IČ" name="ic" autofocus="true" />
          <FormButton :onClick="getDataFromAres" name="Zadejte Ič" :loading="loading" />
        </Form>
        <Form v-else :succesMessage="dataSuccessMessage">
          <FormInput v-model="aresData.ic" :error="errors.ic" label="IČ" name="ic" />
          <FormInput
            v-show="aresData.dic"
            v-model="aresData.dic"
            :error="errors.dic"
            label="DIČ"
            name="ic"
          />
          <FormInput v-model="aresData.nazev" :error="errors.nazev" label="Jmébo" name="nazev" />
          <FormInput v-model="aresData.ulice" :error="errors.ulice" label="Ulice" name="ulice" />
          <FormInput v-model="aresData.mesto" :error="errors.mesto" label="Město" name="mesto" />
          <FormInput v-model="aresData.psc" :error="errors.psc" label="PSČ" name="psc" />
          <FormButton :onClick="addInvoice" name="Potvrdte IČ" :loading="loading" />
        </Form>
      </Content>
    </div>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "addInvoice",
  middleware: ["auth", "admin"],
})
export default class addInvoice extends Vue {
  @Prop() readonly dataSuccessMessage!: any;
  @Prop() id!: Number;
  private user = {
    ic: "",
  };
  private aresData?: any = {
    ic: "",
    dic: "",
    nazev: "",
    ulice: "",
    mesto: "",
    psc: "",
  };
  public errors = {};
  private edit?: Boolean = true;
  loading?: Boolean = false;

  addInvoice() {
    this.axios
      .put(`invoice/${this.id}`, this.aresData, {})
      .then(({ data: user }) => {
        this.$store.commit("setcurrUser", user);
        this.$router.push({
          name: "user",
          params: { id: `${this.id}` },
        });
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      });
  }
  getDataFromAres() {
    this.axios
      .post("ares", this.user)
      .then((res) => {
        this.edit = false;
        this.aresData = res.data;
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      });
  }
}
</script>
