<template>
  <Container>
    <Box title="Zaregistrovat se" class="w-full lg:w-1/4">
      <Form class="text-left mx-auto">
        <FormInput
          :form="form"
          v-model="form.email"
          label="E-mail"
          name="email"
          autofocus="true"
          type="email"
        />
        <FormInput
          :form="form"
          v-model="form.phone"
          label="Telefonní číslo"
          type="phone"
          name="phone"
        />
        <FormInput
          :form="form"
          v-model="form.password"
          label="Heslo"
          name="password"
          type="password"
        />
        <FormInput
          :form="form"
          v-model="form.confirm_password"
          label="Potvrďte heslo"
          name="confirm_password"
          type="password"
        />
        <FormButton :onClick="register" name="Registrovat se" :loading="form.busy" />
        <router-link :to="{ name: 'login' }" class="router-link">Přihlásit se</router-link>
        <router-link :to="{ name: 'forgotpassowrd' }" class="router-link">Zapomněli jste heslo?</router-link>
      </Form>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "vform";

@Component({
  name: "Register",
  middleware: "guest",
})
export default class Register extends Vue {
  private form = new Form({
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  async register() {
    const { data } = await this.form.post("register");
    let successMessage = "Úspěšně jste byly zaregistrováni";
    this.$router.push({
      name: "login",
      params: { dataSuccessMessage: successMessage },
    });
  }
}
</script>
