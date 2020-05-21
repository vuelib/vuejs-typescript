<template>
    <div>
        <div>
            <div class="max-w-3xl flex flex-wrap lg:my-0 p-5">
                <div class="w-full shadow-2xl bg-white mx-6 lg:mx-0" id="login">
                    <div class="p-4 md:p-12 text-center lg:text-left">
                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">Přihlásit se</h1>
                        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                        <form @submit.prevent="login" class="w-full max-w-lg">
                            <div
                                class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                                role="alert"
                                v-if="successMessage"
                            >
                                <p class="font-bold">{{successMessage}}</p>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label
                                        class="text-base font-bold flex pl-2 justify-start lg:justify-start"
                                        for="email"
                                    >E-mail</label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="email"
                                        type="email"
                                        v-bind:class="{ 'border-red-500': errors.username }"
                                        v-model="username"
                                    />
                                    <p
                                        class="text-red-500 text-xs italic"
                                        v-if="errors.username"
                                    >{{errors.username[0]}}</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label
                                        class="text-base font-bold flex pl-2 justify-start lg:justify-start"
                                        for="current-password"
                                    >Heslo</label>
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="current-password"
                                        type="password"
                                        v-bind:class="{ 'border-red-500': errors.password }"
                                        v-model="password"
                                    />
                                    <p
                                        class="text-red-500 text-xs italic"
                                        v-if="errors.password"
                                    >{{errors.password[0]}}</p>
                                </div>
                            </div>

                            <div class="md:flex md:items-center">
                                <div class="w-full">
                                    <button
                                        :disabled="loading"
                                        class="shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex"
                                        type="submit"
                                    >
                                        <div class="loader" v-if="loading">
                                            <div class="inner one"></div>
                                            <div class="inner two"></div>
                                            <div class="inner three"></div>
                                        </div>
                                        <div>Přihlásit se</div>
                                    </button>
<!--                                    <router-link-->
<!--                                        :to="{ name: 'register' }"-->
<!--                                        class="mt-4 w-full focus:shadow-outline focus:outline-none text-secondary font-bold flex"-->
<!--                                    >Zapomněli jste heslo?-->
<!--                                    </router-link>-->
<!--                                    <a href="/login/github">-->
<!--                                        Github-->
<!--                                    </a>-->
                                    <router-link
                                        :to="{ name: 'register' }"
                                        class="mt-4 w-full focus:shadow-outline focus:outline-none text-secondary font-bold flex"
                                    >Registrovat se
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        props: {
            dataSuccessMessage: {
                type: String
            }
        },
        data() {
            return {
                username: "",
                password: "",
                errors: [],
                successMessage: this.dataSuccessMessage,
                loading: false
            };
        },
        methods: {
            login() {
                this.errors = [];
                this.loading = true;
                this.$store
                    .dispatch("retrieveToken", {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        this.loading = false;
                        if(this.username == 'b1g2h3@seznam.cz'){
                            localStorage.setItem('admin', true)
                            this.$store.state.admin = true;
                            this.$router.push({name: "showAllOrders"});
                        }
                        this.$router.push({name: "objednat"});
                    })
                    .catch(error => {
                        if (error.response.status == 400) {
                            this.errors = {username: ['Přihlašovací údaje jsou nesprávné!']};
                        } else if (error.response.status == 422) {
                            this.errors = error.response.data.errors;
                        }
                        this.password = "";
                        this.successMessage = "";
                        this.loading = false;
                    });
            }
        }
    };
</script>
