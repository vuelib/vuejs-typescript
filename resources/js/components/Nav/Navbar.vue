<template>
    <div class="w-full bg-junglegreen shadow-lg">
        <nav
            class="pt-2 px-1 mt-0 container mx-auto w-full z-20 top-0 text-primary"
        >
            <div class="flex flex-wrap">
                <Logo />
                <MenuItems
                    :links="navbarlinks"
                    :logged-in="loggedIn"
                    :loggedInlinks="loggedInlinks"
                    :user="user"
                />
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import MenuItems from "./MenuItems.vue";
import Logo from "./Logo.vue";
@Component({
    components: {
        MenuItems,
        Logo
    },
    computed: mapGetters(["navbarlinks", "loggedInlinks", "loggedIn", "user"]),
    methods: mapMutations(["setTheme"])
})
export default class Nav extends Vue {
    navbarlinks!: Array<String>;
    loggedInlinks!: Array<String>;
    user!: Array<String>;
}
</script>
