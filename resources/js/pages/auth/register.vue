<template>
  <Container>
    <Box title="Zaregistrovat se" class="w-128">
      <Form>
        <FormInput
          v-model="user.email"
          :error="errors.email"
          label="E-mail"
          name="email"
          autofocus="true"
          type="email"
        />
        <FormInput
          v-model="user.phone"
          :error="errors.phone"
          label="Telefonní číslo"
          type="phone"
          name="phone"
        />
        <FormInput
          v-model="user.password"
          :error="errors.password"
          label="Heslo"
          name="password"
          type="password"
        />
        <FormInput
          v-model="user.confirm_password"
          :error="errors.confirm_password"
          label="Potvrďte heslo"
          name="confirm_password"
          type="password"
        />
        <FormButton :onClick="register" name="Registrovat se" :loading="loading" />
        <router-link :to="{ name: 'login' }" class="router-link">Přihlásit se</router-link>
        <router-link :to="{ name: 'forgotpassowrd' }" class="router-link">Zapomněli jste heslo?</router-link>
      </Form>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Register",
})
export default class Register extends Vue {
  private user = {
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  private errors = {};
  private loading?: Boolean = false;

  register() {
    this.$store
      .dispatch("register", this.user)
      .then((response) => {
        this.loading = false;
        let successMessage = "Úspěšně jste byly zaregistrováni";
        this.$router.push({
          name: "login",
          params: { dataSuccessMessage: successMessage },
        });
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
        this.user.password = "";
      });
  }
}
</script>
