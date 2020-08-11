<template>
  <Content title="Změna kontaktních údajů">
    <div class="table">
      <Form :succesMessage="successMessage">
        <customInput
          v-model="user.phone"
          :error="errors.phone"
          label="Telefonní číslo"
          name="phone"
          autofocus="true"
        />
        <customInput v-model="user.password" :error="errors.password" label="Heslo" name="ic" />
        <customFormButton :onClick="changePhone" name="Změnit údaje" :loading="loading" />
      </Form>
    </div>
  </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Login",
})
export default class Login extends Vue {
  @Prop() successMessage!: any;
  private user = {
    phone: "",
    password: "",
  };
  public errors = {};
  private edit?: Boolean = true;
  loading?: Boolean = false;

  changePhone() {
    this.errors = [];
    this.loading = true;
    this.axios
      .post("/change-contact", this.user, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        this.loading = false;
        this.successMessage = "Úspěšně jste změnili heslo";
      })
      .catch((error) => {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        } else if (error.response.status == 404) {
          console.log(error.response.data);
          this.errors = error.response.data.errors;
        }
        this.loading = false;
      });
  }
}
</script>

