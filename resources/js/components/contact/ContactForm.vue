<template>
  <form @submit.prevent="sendEmail" class="mx-auto lg:mx-0 w-4/5 border-teal-500 opacity-100">
    <div class="flex flex-wrap -mx-3">
      <formInput id="name" label="Vaše jméno" value="contact.firstname" />
      <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label
          class="pt-2 text-base font-bold flex pl-2 justify-start lg:justify-start"
          for="grid-first-name"
        >Jméno</label>

        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          placeholder="Jméno"
          type="text"
          v-bind:class="{ 'border-red-500': errors.firstname }"
          v-model="contact.firstname"
        />
        <p class="text-red-500 text-xs italic" v-if="errors.firstname">{{errors.firstname[0]}}</p>
      </div>
      <div class="w-full md:w-1/2">
        <label
          class="pt-2 text-base font-bold flex pl-2 justify-start lg:justify-start"
          for="grid-last-name"
        >Příjmení</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name"
          placeholder="Příjmení"
          type="text"
          v-bind:class="{ 'border-red-500': errors.lastname }"
          v-model="contact.lastname"
        />
        <p class="text-red-500 text-xs italic" v-if="errors.lastname">{{errors.lastname[0]}}</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3">
        <label
          class="text-base font-bold flex pl-2 justify-start lg:justify-start"
          for="email"
        >E-mailová adresa</label>
        <input
          class="ares-input"
          id="email"
          placeholder="Email"
          type="email"
          v-bind:class="{ 'border-red-500': errors.email }"
          v-model="contact.email"
        />
        <p class="text-red-500 text-xs italic" v-if="errors.email">{{errors.email[0]}}</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
        <label
          class="text-base font-bold flex pl-2 justify-start lg:justify-start"
          for="reason"
        >Předmět zprávy</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="reason"
          placeholder="Předmět zprávy"
          type="text"
          v-bind:class="{ 'border-red-500': errors.reason }"
          v-model="contact.reason"
        />
        <p class="text-red-500 text-xs italic" v-if="errors.reason">{{errors.reason[0]}}</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
        <label
          class="text-base font-bold flex pl-2 justify-start lg:justify-start"
          for="message"
        >Zpráva</label>
        <textarea
          class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20 resize-none"
          id="message"
          placeholder="Místo pro váš dotaz"
          v-bind:class="{ 'border-red-500': errors.message }"
          v-model="contact.message"
        ></textarea>
        <p class="text-red-500 text-xs italic" v-if="errors.message">{{errors.message[0]}}</p>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-full">
        <button
          class="shadow bg-junglegreen hover:bg-darkergreen focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >Kontaktujte nás!!</button>
      </div>
    </div>
  </form>
</template>
<script>
import formInput from "../common/formInput";
export default {
  components: { formInput },
  name: "contactForm",
  props: {
    contact: {},
    errors: {},
    sendEmail: {}
  }
};
</script>
