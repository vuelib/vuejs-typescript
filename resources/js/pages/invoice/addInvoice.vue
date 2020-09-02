<template>
  <Container>
    <div class="table mt-3 w-1/3">
      <Content title="Přidat fakturační údaje">
        <Form :succesMessage="dataSuccessMessage" v-if="aresData.ic === ''">
          <FormInput v-model="user.ic" :error="errors.ic" label="IČ" name="ic" autofocus="true" />
          <FormButton :onClick="addInvoice" name="Zadejte Ič" :loading="loading" />
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
  middleware: "auth",
})
export default class addInvoice extends Vue {
  @Prop() readonly dataSuccessMessage!: any;
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
    this.errors = [];
    if (this.edit) {
      this.sendData("/ares", this.user, true);
    } else {
      this.sendData("/invoice", this.aresData, false);
    }
  }
  sendData(url, data, then) {
    this.axios
      .post(url, data)
      .then((res) => {
        if (then) {
          this.edit = false;
          this.aresData = res.data;
        } else {
          this.$store.commit("addInvoice", this.aresData);
          this.$router.push({ name: "objednat" });
        }
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      });
  }
}
</script>
