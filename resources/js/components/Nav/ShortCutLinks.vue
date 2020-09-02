<template>
    <div
        class="hidden md:block w-full bg-button font-bold text-primary p-2"
        v-if="loggedIn"
    >
        <div class="flex justify-center" v-if="user.role">
            <router-link :to="{ name: 'showUsers' }" class="pl-2"
                >Přehled uživatelů</router-link
            >
            <router-link :to="{ name: 'showAllOrders' }" class="pl-2"
                >Přehled objednávek</router-link
            >
            <router-link :to="{ name: 'admin' }" class="pl-2"
                >Úpravy</router-link
            >
        </div>
        <div v-else class="flex justify-center">
            <router-link :to="{ name: 'objednat' }" class="pl-2"
                >Objednat zboží</router-link
            >
            <router-link :to="{ name: 'Orders' }" class="pl-2"
                >Přehled objednávek</router-link
            >
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";
@Component({
    computed: mapGetters(["isAdmin", "loggedIn", "user"])
})
export default class shortcuLinks extends Vue {
    isAdmin!: Boolean;
    loggedIn!: Boolean;
}
</script>
