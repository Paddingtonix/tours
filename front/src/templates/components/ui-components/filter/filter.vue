<template>
    <div class="filter">
        <div class="filter__container">
            <template v-for="(category, i) in filter">
                <div
                    v-if="
                        category.isShortVisible &&
                        (category.type === 'budget' || category.list.length)
                    "
                    :key="'filter__category' + i"
                    :class="{ _open: categories[i] }"
                    class="filter__category js-filter-category"
                >
                    <div
                        class="filter__category-title card-style"
                        @click="openCategory(i)"
                    >
                        <div
                            class="filter__category-text"
                            :class="{
                                _active:
                                    checked[i].length > 0 ||
                                    (category.type === 'budget' &&
                                        ($route.query.minPrice ||
                                            $route.query.maxPrice)),
                            }"
                        >
                            <span>
                                {{ category.name }}
                                {{
                                    checked[i].length > 0 &&
                                    category.list.length
                                        ? `(${checked[i].length} ${$root.staticText.filter.from} ${category.list.length})`
                                        : ''
                                }}
                            </span>
                        </div>
                        <svg
                            class="filter__arrow"
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
                        <div
                            v-if="categories[i]"
                            class="filter-list card-style"
                        >
                            <div
                                v-if="category.type === 'budget'"
                                class="filter-list__container"
                            >
                                <filter-budget-cmp
                                    :item-filter-budget="itemFilterBudget"
                                    :is-small="true"
                                ></filter-budget-cmp>
                            </div>
                            <div
                                v-else-if="category.list.length"
                                class="filter-list__container"
                            >
                                <div class="filter-list-head">
                                    <div class="filter-list-head__left">
                                        {{
                                            checked[i].length === 0
                                                ? category.list.length
                                                : checked[i].length
                                        }}
                                        {{ $root.staticText.filter.from }}
                                        {{ category.list.length }}
                                    </div>
                                    <div
                                        v-if="checked[i].length === 0"
                                        class="filter-list-head__btn"
                                        @click="checkAll(i)"
                                    >
                                        {{ $root.staticText.filter.all }}
                                    </div>
                                    <div
                                        v-else
                                        class="filter-list-head__btn"
                                        @click="resetFilter(i)"
                                    >
                                        {{ $root.staticText.filter.reset }}
                                    </div>
                                </div>
                                <div
                                    class="filter-list__item"
                                    v-for="(listItem, j) in category.list"
                                    :key="'filter' + i + '-list-' + j"
                                >
                                    <input
                                        type="checkbox"
                                        class="filter-list__input"
                                        :id="
                                            'filter-' +
                                            i +
                                            '-checkbox-' +
                                            listItem.id
                                        "
                                        :value="listItem.id.toString()"
                                        v-model="checked[i]"
                                    />
                                    <label
                                        class="filter-list__label"
                                        :for="
                                            'filter-' +
                                            i +
                                            '-checkbox-' +
                                            listItem.id
                                        "
                                    >
                                        <svg
                                            class="filter-list__ok"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.68966 9.07586C4.28972 8.69498 3.65675 8.71041 3.27586 9.11034C2.89498 9.51028 2.91041 10.1433 3.31034 10.5241L4.68966 9.07586ZM8.2 13.8L7.51034 14.5241C7.9034 14.8985 8.5233 14.8909 8.90711 14.5071L8.2 13.8ZM16.7071 6.70711C17.0976 6.31658 17.0976 5.68342 16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289L16.7071 6.70711ZM3.31034 10.5241L7.51034 14.5241L8.88966 13.0759L4.68966 9.07586L3.31034 10.5241ZM8.90711 14.5071L16.7071 6.70711L15.2929 5.29289L7.49289 13.0929L8.90711 14.5071Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <span>{{ listItem.text }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import filterBudget from "@components/ui-components/filter-budget/filter-budget";

export default {
    props: {
        filter: Array,
    },
    data() {
        return {
            mount: false,
            checked: [],
            categories: [],
            query: {},

            isPushRoute: false,
            watchChecked: null,
        };
    },
    components: {
        'filter-budget-cmp': filterBudget,
    },
    computed: {
        ...mapState('mobile', ['isMobile']),

        itemFilterBudget() {
            return this.filter.find(item => item.type === 'budget');
        },
    },
    watch: {
        // обновляем массив checked (предварительно сняв watch),
        // если route обновился без выбора чекбоксов в фильтре
        // (то есть, изменили фильтр в модалке фильтров)
        '$route.query': function () {
            // если this.pushRoute true, то был изменен фильтр (не в модалке фильтров)
            if (this.pushRoute) {
                this.pushRoute = false;
                return;
            }

            this.watchChecked();
            this.resetChecked();
            this.initChecked();
            this.setWatchers();
        }
    },
    methods: {
        getArrCheckedList(i) {
            return this.filter[i].list
                .filter(el => this.checked[i].includes(el.id.toString()))
                .map(item => item.text).join(', ');
        },
        handlerChecked(newValue) {
            if (!this.mount) {
                return;
            }

            newValue.forEach((item, i) => {
                this.query[this.filter[i].id] = item.length ? item.join() : undefined;
            });

            this.pushFilter();
        },
        pushFilter() {
            this.isPushRoute = true;
            this.$router.push({
                name: this.$route.name,
                query: Object.assign(
                    {},
                    this.$route.query,
                    {
                        loadMore: undefined,
                        currentPage: undefined,
                    },
                    this.query
                ),
            }).catch((err) => {
            });
        },
        resetFilter(i, j) {
            if (i === undefined) {
                this.checked = [];
                this.filter.forEach(() => {
                    this.checked.push([]);
                });
            } else {
                this.checked.splice(i, 1, []);
                if (j)
                    this.checked.splice(j, 1, []);
            }
        },
        checkAll(i) {
            this.filter.find((el, idx) => idx === i).list.forEach(item => {
                this.checked[i].push(item.id);
            });
        },

        openCategory(i) {
            this.filter.forEach((item, index) => {
                if (index === i) {
                    this.categories.splice(index, 1, !this.categories[i]);
                } else {
                    this.categories.splice(index, 1, false);
                }
            });
        },
        clickOutFilter(e) {
            if (!e.target.closest('.js-filter-category') && !e.target.classList.contains('js-reset')) {
                this.resetOpenFilter();
            }
        },
        resetOpenFilter() {
            this.filter.forEach((item, index) => {
                this.categories.splice(index, 1, false);
            });
        },
        initChecked() {
            this.filter.forEach((item, i) => {
                this.checked.push(
                    (this.$route.query[item.id] && item.isShortVisible && item.list.length) ?
                        this.$route.query[item.id].split(',') :
                        []
                );
            });
        },
        setWatchers() {
            this.watchChecked = this.$watch('checked', function(newValue) {this.handlerChecked(newValue)}, { deep: true });
        },
        resetChecked() {
            this.checked = [];
        },
    },
    created() {
        this.initChecked();
        this.setWatchers();
    },
    mounted() {
        this.mount = true;
        window.addEventListener('click', this.clickOutFilter);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.clickOutFilter);
    }
};
</script>

<style lang="sass"></style>
