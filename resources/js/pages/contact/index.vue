<template>
  <Container>
    <Box title="Šotola Miroslav">
      <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
        <svg
          class="h-4 fill-current text-darkergreen pr-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
          />
        </svg>
        Velkoobchod a maloobchod
      </p>
      <p
        class="pt-8 text-2xl text-base font-bold flex items-center justify-center lg:justify-start"
      >Kontaktujte nás</p>
      <Form :onClick="sendEmail" :succesMessage="dataSuccessMessage">
        <FormInput
          v-model="contact.email"
          :error="errors.email"
          label="Vaš Email"
          name="email"
          autofocus="true"
          type="email"
        />
        <FormInput
          v-model="contact.reason"
          :error="errors.reason"
          label="Předmět zprávy"
          name="reason"
        />
        <FormTextarea
          v-model="contact.message"
          :error="errors.message"
          label="Vaše zpráva"
          name="reason"
          :rows="3"
        />
        <FormButton name="Kontaktujte nás!!" :loading="loading" :onClick="sendEmail" />
      </Form>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "sendEmail",
})
export default class sendEmail extends Vue {
  @Prop() dataSuccessMessage!: any;
  private user = {
    username: "",
    password: "",
  };
  private contact = {
    email: "",
    reason: "",
    message: "",
  };
  public errors = {};
  loading?: Boolean = false;
  sendEmail() {
    this.loading = true;
    this.errors = [];
    this.axios
      .post("contact", this.contact)
      .then((res) => {
        this.loading = false;
        this.dataSuccessMessage = res.data[0];
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
