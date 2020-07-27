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
        <customInput
          v-model="contact.email"
          :error="errors.email"
          label="Vaš Email"
          name="email"
          autofocus="true"
          type="email"
        />
        <customInput
          v-model="contact.reason"
          :error="errors.reason"
          label="Předmět zprávy"
          name="reason"
        />
        <customTextarea
          v-model="contact.message"
          :error="errors.message"
          label="Vaše zpráva"
          name="reason"
          :rows="3"
        />
        <customFormButton name="Kontaktujte nás!!" :loading="loading" :onClick="sendEmail" />
      </Form>
    </Box>
  </Container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Box from "../common/box.vue";
import Container from "../common/container.vue";
import Form from "../common/form.vue";
import customInput from "../common/formInput.vue";
import customTextarea from "../common/formTextarea.vue";
import customFormButton from "../common/formButton.vue";
@Component({
  name: "sendEmail",
  components: {
    Box,
    Container,
    Form,
    customInput,
    customTextarea,
    customFormButton,
  },
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
