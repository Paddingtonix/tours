<template>
    <div
        v-if="itemFilterBudget"
        class="filter-modal-budget"
        :class="{ _small: isSmall }"
    >
        <h3 v-if="!isSmall">{{ itemFilterBudget.title }}</h3>
        <div
            v-else
            class="filter-modal-budget-info"
            :class="{ _active: activeInfo }"
        >
            <div class="filter-modal-budget-info__price _rouble">
                {{ minPrice }}
            </div>
            &nbsp;–&nbsp;
            <div class="filter-modal-budget-info__price _rouble">
                {{ maxPrice }}
            </div>
            <div
                v-if="activeInfo"
                class="filter-modal-budget-info__reset js-reset"
                @click="resetPush"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="16" height="16" rx="8" fill="#10B6AA" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5303 5.53033C11.8232 5.23744 11.8232 4.76256 11.5303 4.46967C11.2374 4.17678 10.7626 4.17678 10.4697 4.46967L8 6.93934L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L6.93934 8L4.46967 10.4697C4.17678 10.7626 4.17678 11.2374 4.46967 11.5303C4.76256 11.8232 5.23744 11.8232 5.53033 11.5303L8 9.06066L10.4697 11.5303C10.7626 11.8232 11.2374 11.8232 11.5303 11.5303C11.8232 11.2374 11.8232 10.7626 11.5303 10.4697L9.06066 8L11.5303 5.53033Z"
                        fill="#E9F6F2"
                    />
                </svg>
            </div>
        </div>

        <div class="filter-modal-budget__container card-style">
            <div class="filter-modal-budget__content">
                <div
                    class="filter-modal-budget__item"
                    ref="columns"
                    :class="{
                        _active:
                            item.price >= minPrice && item.price <= maxPrice,
                    }"
                    :data-price="item.price"
                    v-for="item in itemFilterBudget.items"
                    :style="{
                        width: `calc((100% - ${marginColumn * 2}px*${
                            itemFilterBudget.items.length
                        })/${itemFilterBudget.items.length})`,
                        height:
                            minCount === item.count
                                ? '6px'
                                : maxCount === item.count
                                ? '88px'
                                : ((88 - 6) * (item.count - minCount)) /
                                      (maxCount - minCount) +
                                  6 +
                                  'px',
                    }"
                ></div>
            </div>
            <div class="filter-modal-budget-drag">
                <svg
                    :style="{ 'margin-left': `${deltaLeft}px` }"
                    @mousedown="mousedownDrag"
                    @mouseup="mouseupDrag"
                    @mousemove="mousemoveDragLeft"
                    class="filter-modal-budget-drag__left"
                    ref="dragLeft"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        fill="#EEF0F4"
                    />
                    <path
                        d="M8 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M12 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M16 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        stroke="#B5BCC7"
                    />
                </svg>
                <div class="filter-modal-budget-drag__wrap"></div>
                <svg
                    :style="{ 'margin-right': `${deltaRight}px` }"
                    @mousedown="mousedownDrag"
                    @mouseup="mouseupDrag"
                    @mousemove="mousemoveDragRight"
                    class="filter-modal-budget-drag__right"
                    ref="dragRight"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        fill="#EEF0F4"
                    />
                    <path
                        d="M8 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M12 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M16 8V16"
                        stroke="#B5BCC7"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        stroke="#B5BCC7"
                    />
                </svg>
            </div>
        </div>
        <div v-if="!isSmall" class="filter-modal-budget__row">
            <div class="filter-modal-budget__price card-style">
                <div class="filter-modal-budget__price-name">
                    {{ $root.staticText.filter.priceMin }}
                </div>
                <div class="filter-modal-budget__price-input _rouble">
                    <input
                        type="number"
                        v-model.number="minPrice"
                        @input="inputMinPrice"
                    />
                </div>
            </div>
            <div class="filter-modal-budget__price card-style">
                <div class="filter-modal-budget__price-name">
                    {{ $root.staticText.filter.priceMax }}
                </div>
                <div class="filter-modal-budget__price-input _rouble">
                    <input
                        type="number"
                        v-model.number="maxPrice"
                        @input="inputMaxPrice"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "filter-budget",
    props: {
        itemFilterBudget: Object,
        isSmall: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            query: {},

            widthColumn: 0, // ширина столбика
            minCount: 0, // мин количество туров из всего массива с ценами (для высота столбика)
            maxCount: 0, // макс количество туров из всего массива с ценами (для высота столбика)
            minPrice: 0, // мин цена, по которой фильтруем
            maxPrice: 0, // макс цена, по которой фильтруем
            minPriceFix: 0, // цена для первого стобца (самая минимальная цена)
            maxPriceFix: 0, // цена для последнего стобца (самая максимальная цена)

            mousedown: false,
            clientXStartLeft: -1, // положение левого ползунка по оси x
            clientXStartRight: -1, // положение правого ползунка по оси x
            deltaLeft: 0, // отступ слева для левого ползунка
            deltaRight: 0, // отступ справа для правого ползунка
            halfWidthSvgDrag: 12, // половинка ширины кнопки ползунка
            marginColumn: 2, // отступы слева и справа от столбика
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),

        activeInfo() {
            return this.minPrice !== this.minPriceFix || this.maxPrice !== this.maxPriceFix;
        }
    },
    methods: {
        mousedownDrag() {
            this.mousedown = true;
        },
        mouseupDrag() {
            this.mousedown = false;
        },
        mousemoveDragLeft(e) {
            if (this.mousedown) {
                let delta = e.clientX - this.clientXStartLeft;
                this.deltaLeft = delta > 0 ? delta : 0;

                let index = Math.ceil(this.deltaLeft / this.widthColumn);
                this.minPrice = parseFloat(this.$refs.columns[index].dataset.price);

                this.pushMinPrice();
            }
        },
        mousemoveDragRight(e) {
            if (this.mousedown) {
                let delta = this.clientXStartRight - e.clientX;
                this.deltaRight = delta > 0 ? delta : 0;

                let index = Math.ceil(this.deltaRight / this.widthColumn);
                this.maxPrice = parseFloat(this.$refs.columns[this.$refs.columns.length - index - 1].dataset.price);

                this.pushMaxPrice();
            }
        },
        setDeltaLeft() {
            let isSet = false;
            for (let i = 0; i < this.$refs.columns.length; i++) {
                if (this.$refs.columns[i].dataset.price >= Math.min(this.minPrice, this.maxPrice)) {
                    this.deltaLeft = this.widthColumn * i > 0 ? this.widthColumn * i - this.halfWidthSvgDrag : 0;
                    isSet = true;
                    break;
                }
            }
            if (!isSet) {
                this.deltaLeft = this.widthColumn * this.$refs.columns.length - 44;
            }
        },
        setDeltaRight() {
            let isSet = false;
            for (let i = 0; i < this.$refs.columns.length; i++) {
                if (this.$refs.columns[i].dataset.price > Math.max(this.minPrice, this.maxPrice)) {
                    this.deltaRight = this.widthColumn * (this.$refs.columns.length - i) > 0 ?
                        this.widthColumn * (this.$refs.columns.length - i) - this.halfWidthSvgDrag :
                        0;
                    isSet = true;
                    break;
                }
            }
            if (!isSet) {
                this.deltaRight = 0;
            }
        },
        inputMinPrice() {
            this.setDeltaLeft();
            this.pushMinPrice();
        },
        inputMaxPrice() {
            this.setDeltaRight();
            this.pushMaxPrice();
        },
        pushMinPrice() {
            this.query['minPrice'] = this.minPrice > this.minPriceFix ? this.minPrice : undefined;
            this.pushFilter();
        },
        pushMaxPrice() {
            this.query['maxPrice'] = this.maxPrice < this.maxPriceFix ? this.maxPrice : undefined;
            this.pushFilter();
        },
        pushFilter() {
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
        reset() {
            this.minPrice = this.minPriceFix;
            this.maxPrice = this.maxPriceFix;
            this.setDeltaLeft();
            this.setDeltaRight();
        },
        resetPush() {
            this.reset();
            this.query = {
                minPrice: undefined,
                maxPrice: undefined,
            };
            this.pushFilter();
        }
    },
    created() {
        this.minCount = Math.min(...this.itemFilterBudget.items.map(item => item.count));
        this.maxCount = Math.max(...this.itemFilterBudget.items.map(item => item.count));
        this.minPriceFix = Math.min(...this.itemFilterBudget.items.map(item => item.price));
        this.maxPriceFix = Math.max(...this.itemFilterBudget.items.map(item => item.price));

        let minPrice = parseFloat(this.$route.query['minPrice']);
        let maxPrice = parseFloat(this.$route.query['maxPrice']);

        this.minPrice = this.$route.query['minPrice'] ?
            minPrice > maxPrice ? this.minPriceFix : minPrice :
            this.minPriceFix;
        this.maxPrice = this.$route.query['maxPrice'] ?
            maxPrice < minPrice ? this.maxPriceFix : maxPrice :
            this.maxPriceFix;

        if (this.isSmall) {
            this.marginColumn = 1;
            this.halfWidthSvgDrag = 8;
        }
    },
    mounted() {
        this.widthColumn = this.$refs.columns[0].clientWidth + 4;
        this.clientXStartLeft = this.$refs.dragLeft.getBoundingClientRect().x + this.halfWidthSvgDrag;
        this.clientXStartRight = this.$refs.dragRight.getBoundingClientRect().x + this.halfWidthSvgDrag;

        this.setDeltaLeft();
        this.setDeltaRight();

        document.addEventListener('mouseup', this.mouseupDrag);
    },
    beforeDestroy() {
        document.removeEventListener('mouseup', this.mouseupDrag);
    }
}
</script>

<style lang="sass"></style>
