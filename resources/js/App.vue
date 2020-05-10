<template>
    <div :class="theme">
        <navbar/>
        <sidebar/>
        <shortcutLinks/>
        <main class="flex justify-center ">
            <router-view/>
        </main>
        <foot/>
    </div>
</template>

<script>
    import navbar from './components/src/navbar';
    import sidebar from './components/src/sidebar';
    import shortcutLinks from './components/src/shortcutLinks';
    import foot from './components/src/foot';


    export default {
        components: {
            navbar,
            sidebar,
            shortcutLinks,
            foot
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
            theme() {
                return this.$store.getters.theme;
            }
        },
        created() {
            this.loggedIn ? this.$store.dispatch('getUser') : '';


        }
    };
</script>
