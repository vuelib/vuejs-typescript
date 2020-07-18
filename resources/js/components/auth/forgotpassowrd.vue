<template>
  <Box title="Zapomenuté heslo">
    <Form :onClick="login" :succesMessage="dataSuccessMessage">
      <customInput
        v-model="user.email"
        :error="errors.email"
        label="Váš E-mail"
        name="email"
        autofocus="true"
      />
      <customFormButton name="Odeslat nové heslo" :loading="loading" />
      <router-link :to="{ name: 'login' }" class="router-link">Přihlásit se</router-link>
      <router-link :to="{ name: 'register' }" class="router-link">Registrovat se</router-link>
    </Form>
  </Box>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Box from "../common/box.vue";
import Form from "../common/form.vue";
import customInput from "../common/formInput.vue";
import customFormButton from "../common/formButton.vue";
@Component({
  name: "ForgotPassowrd",
  components: {
    Box,
    Form,
    customInput,
    customFormButton
  }
})
export default class ForgotPassowrd extends Vue {
  @Prop() readonly dataSuccessMessage!: any;
  public user = {
    email: ""
  };
  public errors = {};
  loading?: Boolean = false;

  login() {
    this.errors = {};
    this.loading = true;
    this.$store
      .dispatch("retrieveToken", this.user)
      .then(response => {
        this.loading = false;
        this.$router.push({ name: "objednat" });
      })
      .catch(error => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
        this.loading = false;
      });
  }
}
</script>
