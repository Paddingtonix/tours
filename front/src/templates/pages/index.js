import Modal from '@components/base/modal/modal.vue';
import sliderCard from '@components/ui-components/card-slider/card-slider.vue';
import tooltip from '@components/ui-components/tooltip/tooltip.vue';
import { router } from '@src/routes';
import { beforeRouteEnter } from '@utilities/routerPageHook.js';
import onScrollAnimate from '@utilities/scrollAnimate.js';
import Vue from 'vue';
import { mapState } from 'vuex';

export default {
    name: 'index',
    data() {
        return {
            template: '<main></main>',
            detailedShow: false,
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
    },
    methods: {
        showDetailed() {
            this.detailedShow = !this.detailedShow;
        },
    },
    components: {
        'modal-cmp': Modal,
        'card-slider': sliderCard,
        'tooltip-cmp': tooltip,
    },
    mounted() {},
    beforeRouteUpdate(to, from, next) {
        const path = to.path.replace(router.history.base, '');
        const url = `templates${path}`;

        this.$root.setDataAnimateFalse('.js-comments-container');

        Vue.http.get(url, { params: to.query }).then(
            (data) => {
                next();
                setTimeout(() => {
                    this.template = data.data;
                    onScrollAnimate();
                }, 500);
            },
            () => {
                next('/404');
            },
        );
    },
    beforeRouteEnter,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
