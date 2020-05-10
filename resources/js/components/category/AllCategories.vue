<template>
    <div class="md:flex">
        <aside class="sidebar" v-if="!['zbozi'].includes($route.name)">
           <div class="flex">
               <div  class="w-1/6 text-black block cursor-pointer md:hidden">
                   <Slide Push :closeOnNavigation="true">
                       <router-link
                           :to="{ name: 'category_show', params: { id: category.id, slug: url_slug(category.name) } }"
                           class="link"
                           v-bind:key="category.id"
                           v-for="category in categories"
                       >{{ category.name }}
                       </router-link>
                   </Slide>
               </div>
               <div class="name w-4/6 md:w-full pt-2 md:pt-0">Kategorie</div>
           </div>
            <div class="menu hidden md:block">
                <router-link
                    :to="{ name: 'category_show', params: { id: category.id, slug: url_slug(category.name) } }"
                    class="link hidden md:block"
                    v-bind:key="category.id"
                    v-for="category in categories"
                >{{ category.name }}
                </router-link
                >
            </div>
        </aside>
        <div class="container justify-center flex flex-wrap mt-5" v-if="['zbozi'].includes($route.name)">
            <div
                class="bg-primary w-full border-t border-b text-center border-junglegreen text-success md:px-4 md:py-3"
                v-if="successMessage"
            >
                <p class="font-bold ">{{ successMessage }}</p>
            </div>
            <div
                class="w-full md:w-1/4 m-2"
                v-bind:key="category.id"
                v-for="category in categories"
            >
                <div class="relative w-30 h-30 ">
                    <router-link
                        :to="{
                            name: 'category_show',
                            params: { id: category.id, slug: url_slug(category.name) }
                        }"
                        class=""
                    >
                        <div
                            class="w-full h-full absolute bg-black opacity-0 hover:opacity-0  cursor-pointer"
                        ></div>
                        <div class="text-xl text-junglegreen font-bold">
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
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "AllCategories",
        components:{
            Slide
        },
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
        created(){
            Echo.channel('categories')
                .listen('ItemAdded', (e) => {
                    this.$store.commit("fetchCategories", e.categories);
                })

            Echo.channel('category')
                .listen('ItemDeleted', (e) => {
                    this.$store.commit("deleteCategory", e.category.id);
                })

        },
        mounted() {
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
            },
            url_slug(s, opt){
                s = String(s);
                opt = Object(opt);

                var defaults = {
                    'delimiter': '-',
                    'limit': undefined,
                    'lowercase': true,
                    'replacements': {},
                    'transliterate': (typeof(XRegExp) === 'undefined') ? true : false
                };

                // Merge options
                for (var k in defaults) {
                    if (!opt.hasOwnProperty(k)) {
                        opt[k] = defaults[k];
                    }
                }

                var char_map = {
                    // Czech
                    'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ů': 'U',
                    'Ž': 'Z',
                    'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't', 'ů': 'u',
                    'ž': 'z', 'ý': 'y', 'á': 'a', 'í': 'i', 'ú': 'u', 'é': 'e'
                };

                // Make custom replacements
                for (var k in opt.replacements) {
                    s = s.replace(RegExp(k, 'g'), opt.replacements[k]);
                }

                // Transliterate characters to ASCII
                if (opt.transliterate) {
                    for (var k in char_map) {
                        s = s.replace(RegExp(k, 'g'), char_map[k]);
                    }
                }

                // Replace non-alphanumeric characters with our delimiter
                var alnum = (typeof(XRegExp) === 'undefined') ? RegExp('[^a-z0-9]+', 'ig') : XRegExp('[^\\p{L}\\p{N}]+', 'ig');
                s = s.replace(alnum, opt.delimiter);

                // Remove duplicate delimiters
                s = s.replace(RegExp('[' + opt.delimiter + ']{2,}', 'g'), opt.delimiter);

                // Truncate slug to max. characters
                s = s.substring(0, opt.limit);

                // Remove delimiter from ends
                s = s.replace(RegExp('(^' + opt.delimiter + '|' + opt.delimiter + '$)', 'g'), '');

                return opt.lowercase ? s.toLowerCase() : s;
            }
        }
    };
</script>
<style>
    .bm-burger-button {
        position: relative;
        width: 30px;
        height: 30px;
        left: 36px;
        top: 36px;
        cursor: pointer;
    }
    .bm-burger-bars {
        background-color: #000;
    }
    .line-style {
        position: absolute;
        height: 10%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(63, 63, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
        background: #fff;
    }
    .bm-item-list {
        color: #b8b7ad;
        margin-left: 10%;
        font-size: 20px;
    }
    .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 0.7em;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
    }
</style>
