<template>
  <div class="flex justify-center items-center">
    <ul
      v-show="items.total > items.per_page"
      class="flex w-full justify-center mx-4 my-4 mt-4 list-reset text-secondary font-bold"
    >
      <li>
        <span
          v-show="items.current_page >= 3"
          @click="fetchFirst()"
          class="button bg-transparent py-2 px-2 rounded opacity-50 cursor-pointer"
        >
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </li>
      <li>
        <span
          v-show="items.current_page !== 1"
          @click="fetchPrevius()"
          class="button bg-transparent py-2 px-2 rounded opacity-50 cursor-pointer"
        >
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
      </li>
      <li class>
        <span
          class="button bg-transparent border border-black py-1 px-2 rounded opacity-50"
        >{{items.current_page}}</span>
      </li>
      <li>
        <span
          @click="fetchNext()"
          v-show="items.current_page !== items.last_page"
          class="button bg-transparent py-2 px-2 rounded opacity-50 cursor-pointer"
        >
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </li>
      <li>
        <span
          v-show="items.current_page < (items.last_page - 1)"
          @click="fetchLast()"
          class="button bg-transparent py-2 px-1 rounded opacity-50 cursor-pointer"
        >
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "Pagination"
})
export default class Pagination extends Vue {
  @Prop() readonly items!: any;
  @Prop({ default: "id" }) readonly _key?: String;

  fetchPrevius = () => {
    if (this.items.current_page === 1) return;
    this.$store.dispatch(
      `fetch${this.setPath()}s`,
      this.items.current_page - 1
    );
  };

  fetchNext = () => {
    if (this.items.current_page === this.items.last_page) return;
    this.$store.dispatch(
      `fetch${this.setPath()}s`,
      this.items.current_page + 1
    );
  };

  fetchFirst = () => {
    this.$store.dispatch(`fetch${this.setPath()}s`, 1);
  };

  fetchLast = () => {
    if (this.items.current_page === this.items.last_page) return;
    this.$store.dispatch(`fetch${this.setPath()}s`, this.items.last_page);
  };

  setPath = () => {
    let path: any = "";
    path = `${this.items.path}`.split("api/").pop();
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  // {
  //   currentPage: 1,
  //   data: [],
  //   first_page_url: "",
  //   from: "",
  //   last_page: "",
  //   last_page_url: "",
  //   next_page_url: "",
  //   prev_page_url: "",
  //   path: "",
  //   per_page: "",
  //   to: "",
  //   total: ""
  // };
}
</script>

