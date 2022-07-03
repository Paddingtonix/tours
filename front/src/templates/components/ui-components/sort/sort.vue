<template>
    <div class="sort" v-click-outside="closeSort">
        <div
            class="sort__container card-style"
            :class="{ _open: openSort }"
            @click="openSort = !openSort"
        >
            <span>{{ activeItem ? activeItem.name : defaultItem.name }}</span>
            <svg
                class="sort__arrow"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L15.2929 8.29289ZM10 15L10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L10 15ZM3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L3.29289 9.70711ZM16.7071 9.70711L10.7071 15.7071L9.29289 14.2929L15.2929 8.29289L16.7071 9.70711ZM9.29289 15.7071L3.29289 9.70711L4.70711 8.29289L10.7071 14.2929L9.29289 15.7071Z"
                    fill="#8A919C"
                />
            </svg>
        </div>
        <transition name="fade">
            <div v-if="openSort" class="sort-list card-style">
                <template v-for="item in sort">
                    <router-link
                        v-if="item.value === null"
                        :to="{
                            name: $route.name,
                            query: {
                                ...$route.query,
                                sort: undefined,
                                ...deleteLoadMore,
                            },
                        }"
                        class="sort-list__item"
                    >
                        <span @click="setActiveSort(item)">{{
                            item.name
                        }}</span>
                    </router-link>
                    <router-link
                        v-else
                        :to="{
                            name: $route.name,
                            query: {
                                ...$route.query,
                                sort: item.value,
                                ...deleteLoadMore,
                            },
                        }"
                        class="sort-list__item"
                    >
                        <span @click="setActiveSort(item)">{{
                            item.name
                        }}</span>
                    </router-link>
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "sort",
    props: {
        sort: Array,
        isWatchPush: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            defaultItem: null,
            openSort: false,
            activeItem: null,
            deleteLoadMore: {
                loadMore: undefined,
                currentPage: undefined
            }
        }
    },
    methods: {
        closeSort() {
            this.openSort = false;
        },
        setActiveSort(item) {
            this.activeItem = item;
            this.closeSort();
        },
        handlerRouteQuery() {
            this.activeItem =
                this.$route.query.sort ?
                    this.sort.find(item => item.value === this.$route.query.sort) :
                    null;
        },
    },
    created() {
        this.defaultItem = this.sort.find(item => item.value === null);
        this.activeItem = this.$route.query.sort ? this.sort.find(item => item.value === this.$route.query.sort) : null;

        if (this.isWatchPush) {
            this.$watch('$route', this.handlerRouteQuery);
        }
    }
}
</script>

<style lang="sass"></style>
