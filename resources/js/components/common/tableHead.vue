<template>
  <thead>
    <tr>
      <th
        class="cursor-pointer"
        v-for="column in columns"
        :key="column.path || column._entry"
        v-on:click="raiseSort(column.path)"
      >{{ column.label}}</th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "TableHead"
})
export default class TableHead extends Vue {
  @Prop() readonly columns!: any;
  @Prop() readonly sortColumn!: any;
  @Prop() readonly onSort!: Function;

  raiseSort = path => {
    const { sortColumn, onSort } = this;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (column.path !== this.sortColumn.path) return null;
    if (this.sortColumn.order === "asc")
      return `<i className="fa fa-sort-asc" />`;
    return `<i className="fa fa-sort-desc" />`;
  };
}
</script>

