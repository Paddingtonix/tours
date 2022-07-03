<template>
    <div class="modal__content modal-rating-reviews js-comments-container">
        <div class="modal-rating-reviews-rating">
            <div
                class="rating-chart"
                :style="`--percentage: ${props.rating * 10};`"
            >
                <div class="rating-chart__inner">
                    <span class="rating-chart__inner-general">
                        Общий рейтинг
                    </span>
                    <h3 class="rating-chart__inner-value fira-sans">
                        {{ props.rating }}
                    </h3>
                    <span class="rating-chart__inner-from">из 10</span>
                </div>
            </div>
            <div class="rating-line">
                <span class="rating-line__title">
                    На основе
                    {{ props.ratingCount }}
                    оценок
                </span>
                <p class="rating-line__desc">
                    {{ props.reviewsRating.desc }}
                </p>
                <div class="rating-line-wrapper">
                    <div
                        class="rating-line__line"
                        v-for="item in props.reviewsRating.detailed"
                        :key="item.id"
                    >
                        <div class="rating-line__line-title">
                            <span>{{ item.value }}</span>
                            <span>{{ item.name }}</span>
                        </div>
                        <div
                            class="line"
                            :style="`--percentage: ${item.value * 10};`"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-rating-reviews__filter">
            <sort-cmp :sort="props.reviewsRating.sort"></sort-cmp>
        </div>
        <div
            class="modal-rating-reviews-comments"
            v-for="elem in props.reviewsRating.comments"
            v-animation:bottom.delay
        >
            <div class="modal-rating-reviews-comments__inner">
                <div class="modal-rating-reviews-comments__inner-left">
                    <div class="modal-rating-reviews-comments__inner-left-user">
                        <div
                            class="modal-rating-reviews-comments__inner-left-user-avatar"
                            v-text="elem.name.match(/\b(\w)/g).join('')"
                        ></div>
                        <div
                            class="modal-rating-reviews-comments__inner-left-user-name"
                        >
                            <span>{{ elem.name }}</span>
                            <span>{{ elem.date }}</span>
                        </div>
                    </div>
                    <div
                        class="modal-rating-reviews-comments__inner-left-user-detailed"
                    >
                        <div class="__wrap-text">
                            <span>номер</span><span>{{ elem.room }}</span>
                        </div>
                        <div class="__wrap-text">
                            <span>продолжительность</span
                            ><span>{{ elem.duration }}</span>
                        </div>
                        <div class="__wrap-text">
                            <span>сезон</span><span>{{ elem.season }}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-rating-reviews-comments__inner-middle">
                    <p class="modal-rating-reviews-comments__inner-middle-text">
                        {{ elem.comment }}
                    </p>
                    <div
                        class="modal-rating-reviews-comments__inner-middle-text-img"
                    >
                        <div
                            class="modal-rating-reviews-comments__inner-middle-text-img-slider"
                            v-for="item in elem.img"
                        >
                            <img :src="item" :alt="elem.room" />
                        </div>
                    </div>
                </div>
                <div class="modal-rating-reviews-comments__inner-right">
                    <div
                        class="modal-rating-reviews-comments__inner-right-assessment"
                    >
                        <span>{{ elem.assessment }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sort from "@components/ui-components/sort/sort.vue";
import onScrollAnimate from '@utilities/scrollAnimate.js';

export default {
    props: ["props"],
    data() {
        return {}
    },
    components: {
        "sort-cmp": sort
    },
    mounted() {
        onScrollAnimate();
        let container = document.querySelector('.js-comments-container');
        container.addEventListener('scroll', onScrollAnimate);
    }
}
</script>
