<template>
    <Content :title="category.name">
        <div class="table" v-if="category.products">
            <Table
                :columns="columns"
                :data="category.products"
                :sortColumn="sortColumn"
                :onSort="handleSort"
            />
        </div>
    </Content>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
@Component({
    name: "ShowCategory",
    middleware: "guest",
    computed: mapGetters(["category"]),
    methods: mapMutations(["fetchCategory"])
})
export default class ShowCategory extends Vue {
    @Prop() id!: any;
    loading?: Boolean = false;
    columns: any = [
        { path: "id", label: "Číslo produktu" },
        { path: "name", label: "Název" },
        { path: "hmotnost", label: "Balení" }
    ];
    get category() {
        return this.$store.getters.category;
    }
    set category(order) {
        console.log(order);
    }
    sortColumn?: any = { path: "id", order: "asc" };

    handleSort = sortColumn => {
        console.log(sortColumn);
        this.sortColumn = sortColumn;
    };

    created() {
        this.$store.dispatch("fetchCategory", this.id);
    }

    @Watch("$route", { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.$store.dispatch("fetchCategory", this.id);
    }
}
</script>
