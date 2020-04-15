<template>
    <div class="flex">
        <aside class="sidebar" v-if="!['zbozi'].includes($route.name)">
            <div class="name">Kategorie</div>
            <div class="menu">
                <router-link
                    :to="{ name: 'category_show', params: { id: category.id } }"
                    class="link"
                    v-bind:key="category.id"
                    v-for="category in categories"
                >{{ category.name }}
                </router-link
                >
            </div>
        </aside>
        <div class="container justify-center flex flex-wrap mt-5" v-if="['zbozi'].includes($route.name)">
            <div
                class="bg-primary w-full border-t border-b text-center border-junglegreen text-success px-4 py-3"
                v-if="successMessage"
            >
                <p class="font-bold ">{{ successMessage }}</p>
            </div>
            <div
                class="w-full sm:w-1/2 md:w-1/4 m-2"
                v-bind:key="category.id"
                v-for="category in categories"
            >
                <div class="relative w-30 h-30 ">
                    <router-link
                        :to="{
                            name: 'category_show',
                            params: { id: category.id }
                        }"
                        class=""
                    >
                        <div
                            class="w-full h-full absolute bg-black opacity-0 hover:opacity-0  cursor-pointer"
                        ></div>
                        <div class="text-xl text-junglegreen pl-2 font-bold">
                            {{ category.name }}
                        </div>
                        <img
                            :src="category.imagePath"
                        />
                    </router-link>
                </div>
                <div v-if="isAdmin">
                    <router-link :to="{ name: 'editCategory', params: {id: category.id} }"
                                 class="inline-block bg-blue-600 hover:bg-blue-800 text-sm font-semibold  w-full text-white p-2 text-center">
                        Upravit
                    </router-link>
                    <a @click="deleteCategory(category.id)"
                       class="inline-block bg-red-600 hover:bg-red-800 text-sm font-semibold  w-full text-white p-2 text-center">Odstranit</a>
                </div>
            </div>
        </div>
        <transition mode="out-in" name="component-fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "AllCategories",
        props: {
            dataSuccessMessage: {
                type: String
            }
        },
        data() {
            return {
                successMessage: "",
                errors: [],
                successMessage: this.dataSuccessMessage
            };
        },
        created() {
            this.$store.dispatch("fetchCategories");
        },
        computed: {
            isAdmin() {
                return this.$store.getters.isAdmin;
            },
            categories() {
                return this.$store.getters.categories;
            },
        },
        methods: {
            deleteCategory(id) {
                this.errors = [];
                this.successMessage = [];
                this.$store
                    .dispatch("deleteCategory", id)
                    .then(response => {
                        this.successMessage = "Úspěšně jste odstranili kategorii";
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
