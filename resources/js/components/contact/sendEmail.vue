<template>
    <div>
        <div class="max-w-3xl flex   flex-wrap p-6 ">

            <!--Main Col-->
            <div class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-ivory  mx-6 lg:mx-0"
                 id="profile">
                <div class="p-4 md:p-12 text-center lg:text-left">
                    <!-- Image for mobile view-->
                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-6 h-48 w-48 bg-cover bg-center"
                         style="background-image: url('https://www.prteconline.com/home2/wp-content/uploads/2018/09/AAE78F1E-39A5-41C4-9AAA-8EE91232AAFE.jpeg')"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">Šotola Miroslav</h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                        <svg class="h-4 fill-current text-darkergreen pr-4" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/>
                        </svg>
                        Velkoobchod a maloobchod
                    </p>
                    <p class="pt-8 text-2xl text-base font-bold flex items-center justify-center lg:justify-start">
                        Kontaktujte nás</p>
                    <contactForm :contact="contact" :errors="errors" :send-email="sendEmail"/>

                </div>

            </div>

            <div class="w-full lg:w-2/5">
                <img
                    class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                    src="https://www.prteconline.com/home2/wp-content/uploads/2018/09/AAE78F1E-39A5-41C4-9AAA-8EE91232AAFE.jpeg">
            </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from "./ContactForm";

    export default {
        components: {ContactForm},
        data() {
            return {
                contact: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    reason: "",
                    message: ""
                },
                errors: []
            };
        },
        methods: {
            sendEmail() {
                this.errors = [];
                this.axios
                    .post("/contact", this.contact)
                    .then(res => {
                        // this.$router.push({ name: "ShowOrder", params: { id: res.data } });
                    })
                    .catch(error => {
                        if (error.response.status == 422) {
                            this.errors = error.response.data.errors;
                        }
                    });
            }
        }
    };
</script>
