<template>
    <div class="md:ml-6 flex flex-shrink justify-center content-center text-center font-bold text-2xl">
        <router-link :to="{ name: 'home' }" class="p-2">
            <svg class="-mt-3 content-wrapper w-16 h-16 stroke-current text-primary inline-block"
                 fill="none" height="234" viewBox="0 0 326 234" width="326"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M66.0001 227H265V126C306 126 325.143 105 316 65C306.857 25 251 4 205 41.0001L225 30.0001C225 30.0001 200 7 159 7C118 7 90.0001 41.0001 90.0001 41.0001L100 30.0001C100 30.0001 32.0001 -7.00001 11.0001 57C-9.99987 121 66.0001 126 66.0001 126V227Z"
                        stroke-width="20"/>
            </svg>
            <span class="pl-2">
            Šotola Miroslav
          </span>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'logo'
    }
</script>