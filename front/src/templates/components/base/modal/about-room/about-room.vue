<template>
    <div class="modal__content modal-about-room">
        <div class="modal-about-room__container">
            <card-slider :slider="props.about.slider" :name="props.name">
            </card-slider>
        </div>
        <h3 class="modal-about-room__subtitle" v-text="props.name"></h3>
        <div
            class="modal-about-room__text html"
            v-html="props.about.desc"
        ></div>
    </div>
</template>

<script>

import cardSlider from "@components/ui-components/card-slider/card-slider.vue";

export default {
    props: ['props'],
    data() {
        return {

        }
    },
    methods: {},
    components: {
        'card-slider': cardSlider
    },
    mounted() {}
}
</script>

<style></style>
