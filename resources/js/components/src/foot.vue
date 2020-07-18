<template>
  <footer class="bg-gray-100">
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="w-full md:w-1/4 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">Odkazy</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <router-link
              :to="{ name: 'kestazeni'}"
              class="hover:underline text-gray-600 hover:text-orange-500"
            >Ke stažení</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "foot"
};
</script>
