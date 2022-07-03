export default {
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
