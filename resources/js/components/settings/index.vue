<template>
    <div>
        <div class="md:flex">
            <aside class="sidebar">
                <div class="name">Nastavení</div>
                <div class="menu">
                    <router-link :to="{ name: 'ChangeContact'}" class="link">Změnit kontaktní údaje</router-link>
                    <!-- <router-link  class="link" :to="{ name: 'ChangeInvoice'} ">Změnit fakturační údaje</router-link>       -->
                    <router-link :to="{ name: 'ChangePassword'}" class="link">Změnit heslo</router-link>
                    <router-link :to="{ name: 'logout'}" class="link">Odhlásit se</router-link>
                </div>
            </aside>
            <transition mode="out-in" name="component-fade">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllOrders",
        data() {
            return {
                user: []
            };
        },

        created() {
        },
        methods: {}
    };
</script>
