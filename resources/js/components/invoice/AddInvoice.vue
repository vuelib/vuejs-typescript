<template>
  <div class="table mt-3">
    <Content title="Přidat fakturační údaje">
      <Form :succesMessage="dataSuccessMessage" v-if="aresData.ic === ''">
        <customInput v-model="user.ic" :error="errors.ic" label="IČ" name="ic" autofocus="true" />
        <customFormButton :onClick="addInvoice" name="Zadejte Ič" :loading="loading" />
      </Form>
      <Form v-else :succesMessage="dataSuccessMessage">
        <customInput v-model="aresData.ic" :error="errors.ic" label="IČ" name="ic" />
        <customInput
          v-show="aresData.dic"
          v-model="aresData.dic"
          :error="errors.dic"
          label="DIČ"
          name="ic"
        />
        <customInput v-model="aresData.nazev" :error="errors.nazev" label="Jmébo" name="nazev" />
        <customInput v-model="aresData.ulice" :error="errors.ulice" label="Ulice" name="ulice" />
        <customInput v-model="aresData.mesto" :error="errors.mesto" label="Město" name="mesto" />
        <customInput v-model="aresData.psc" :error="errors.psc" label="PSČ" name="psc" />
        <customFormButton :onClick="addInvoice" name="Potvrdte IČ" :loading="loading" />
      </Form>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Content from "../common/content.vue";
import Form from "../common/form.vue";
import customInput from "../common/formInput.vue";
import customFormButton from "../common/formButton.vue";
import { isNullableType } from "graphql";
@Component({
  name: "Login",
  components: {
    Content,
    Form,
    customInput,
    customFormButton
  }
})
export default class Login extends Vue {
  @Prop() readonly dataSuccessMessage!: any;
  private user = {
    ic: ""
  };
  private aresData?: any = {
    ic: "",
    dic: "",
    nazev: "",
    ulice: "",
    mesto: "",
    psc: ""
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
      .post(url, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      })
      .then(res => {
        if (then) {
          this.edit = false;
          this.aresData = res.data;
        } else {
          this.$store.commit("addInvoice", this.aresData);
          this.$router.push({ name: "objednat" });
        }
      })
      .catch(error => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      });
  }
}
</script>
