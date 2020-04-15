<template>
    <div :class="theme" class="w-full bg-junglegreen shadow-lg ">
        <nav class="pt-2 px-1 mt-0 container mx-auto w-full z-20 top-0 text-primary">
            <div class="flex flex-wrap ">
                <logo/>
                <menuItems :links="links" :logged-in="loggedIn" :looged-inlinks="loogedInlinks"
                              :toggle-theme="toggleTheme" :user="user"/>
            </div>
        </nav>
    </div>
</template>
<script>
    import Logo from "./Logo";
    import MenuItems from "./MenuItems";

    export default {
        name: 'navbar',
        components: {MenuItems, Logo},
        data() {
            return {
                theme: 'theme-light'
            };
        },
        created() {
            this.theme = localStorage.getItem('theme') || 'theme-light';
            this.$store.commit('getTheme', this.theme);
        },
        computed: {
            links() {
                return this.$store.state.navbarlinks;
            },
            loogedInlinks() {
                return this.$store.state.loogedInlinks;
            },
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
            user() {
                return this.$store.getters.user;
            }
        },
        methods: {
            toggleTheme() {
                this.theme = this.theme == 'theme-light' ? 'theme-dark' : 'theme-light';
                localStorage.setItem('theme', this.theme);
                this.$store.commit('getTheme', this.theme);
            }
        }
    };
</script>
