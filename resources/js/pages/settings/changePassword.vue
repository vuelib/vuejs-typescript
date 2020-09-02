<template>
  <Content title="Změna hesla">
    <div class="table">
      <Form :succesMessage="successMessage">
        <FormInput
          v-model="user.old_password"
          :error="errors.old_password"
          label="Staré heslo"
          type="password"
          name="old_password"
          autofotuc="true"
        />
        <FormInput
          v-model="user.password"
          :error="errors.password"
          label="Heslo"
          type="password"
          name="password"
        />
        <FormInput
          v-model="user.confirm_password"
          :error="errors.confirm_password"
          label="Potvrďte heslo"
          type="password"
          name="confirm_password"
        />
        <FormButton :onClick="chanePassword" name="Změnit heslo" :loading="loading" />
      </Form>
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Login",
  middleware: "auth",
})
export default class Login extends Vue {
  @Prop() successMessage!: any;
  private user = {
    password: "",
    confirm_password: "",
    old_password: "",
  };
  public errors = {};
  private edit?: Boolean = true;
  loading?: Boolean = false;

  chanePassword() {
    this.errors = [];
    this.loading = true;
    this.axios
      .post("/change-password", this.user, {})
      .then((response) => {
        this.loading = false;
        this.successMessage = "Úspěšně jste změnili kontaktní údaje";
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
        this.loading = false;
      });
  }
}
</script>

