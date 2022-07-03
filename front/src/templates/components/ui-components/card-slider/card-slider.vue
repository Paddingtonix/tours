<template>
    <div @click.stop="" class="card-slider">
        <swiper :options="cardSlider" class="card-slider__swiper">
            <swiper-slide
                class="card-slider__slide"
                v-for="item in slider"
                :key="item.name"
            >
                <div class="card-slider__img">
                    <img :src="item" :alt="name" />
                </div>
            </swiper-slide>
            <div
                class="swiper-button-prev card-slider__prev js-slider-prev"
                slot="button-prev"
            ></div>
            <div
                class="swiper-button-next card-slider__next js-slider-next"
                slot="button-next"
            ></div>
            <div
                class="swiper-pagination card-slider__pag js-slider-pag"
                slot="pagination"
            ></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props: ['slider', 'name'],
    data() {
        return {
            cardSlider: {
                navigation: {
                    nextEl: '.js-slider-next',
                    prevEl: '.js-slider-prev',
                    disabledClass: 'disable',
                },
                pagination: {
                    el: '.js-slider-pag',
                    type: 'bullets',
                    clickable: true,
                }
            }
        };
    },
    methods: {},
};
</script>
