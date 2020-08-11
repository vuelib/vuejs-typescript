<template>
  <Content>
    <Box title="Zapomenuté heslo" class="w-128">
      <Form :succesMessage="dataSuccessMessage">
        <customInput
          v-model="user.email"
          :error="errors.email"
          label="Váš E-mail"
          name="email"
          autofocus="true"
        />
        <customFormButton :onClick="forgotPassword" name="Odeslat nové heslo" :loading="loading" />
        <router-link :to="{ name: 'login' }" class="router-link">Přihlásit se</router-link>
        <router-link :to="{ name: 'register' }" class="router-link">Registrovat se</router-link>
      </Form>
    </Box>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "ForgotPassowrd",
})
export default class ForgotPassowrd extends Vue {
  @Prop() dataSuccessMessage!: any;
  public user = {
    email: "",
  };
  public errors = {};
  loading?: Boolean = false;

  forgotPassword() {
    this.errors = {};
    this.loading = true;
    this.$store
      .dispatch("forgotPassword", this.user)
      .then((res) => {
        this.loading = false;
        this.dataSuccessMessage = res.data.status;
        // this.$router.push({ name: "objednat" });
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status == 400) {
          this.errors = { email: [error.response.data.email] };
        }
        this.loading = false;
      });
  }
}
</script>
