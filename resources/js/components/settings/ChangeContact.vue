<template>
    <div class="w-full">
        <div
            class="header"
        >
            <h3>Změna kontaktních údajů</h3>
        </div>
        <div class="flex flex-wrap">
            <div class="bg-blue-100 w-full border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                 role="alert" v-if="successMessage">
                <p class="font-bold">{{successMessage}}</p>
            </div>
            <div class="w-full">
                <div
                    class="table"
                >
                    <form @submit.prevent="changeContact" class="w-full max-w-lg p-5">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="ares-label"
                                    for="email"
                                >E-mailová adresa</label>
                                <input
                                    class="ares-input"
                                    id="email"
                                    type="email"
                                    v-bind:class="{ 'border-red-500': errors.email }"
                                    v-model="user.email"
                                />
                                <p class="text-red-500 text-xs italic" v-if="errors.email">{{errors.email[0]}}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="ares-label"
                                    for="phone"
                                >Telefonní číslo</label>
                                <input
                                    class="ares-input"
                                    id="phone"
                                    type="phone"
                                    v-bind:class="{ 'border-red-500': errors.phone }"
                                    v-model="user.phone"
                                />
                                <p class="text-red-500 text-xs italic" v-if="errors.phone">{{errors.phone[0]}}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="ares-label"
                                    for="password"
                                >Vaše heslo</label>
                                <input
                                    autocomplete="password"
                                    class="ares-input"
                                    id="password"
                                    type="password"
                                    v-bind:class="{ 'border-red-500': errors.password }"
                                    v-model="user.password"
                                />
                                <p class="text-red-500 text-xs italic" v-if="errors.password">{{errors.password[0]}}</p>
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="full">
                                <button
                                    class="success"
                                    type="submit"
                                >Změnit údaje
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: "",
                    phone: "",
                    password: ""
                },
                errors: [],
                successMessage: ""
            };
        },
        methods: {
            changeContact() {
                this.errors = [];
                axios
                    .put("/changeContact", this.user, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("access_token")
                        }
                    })
                    .then(response => {
                        this.successMessage = "Úspěšně jste změnili kontaktní údaje";
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
