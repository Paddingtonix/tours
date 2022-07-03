import { mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            isMenuScroll: false,
            isScrollUp: 0,
            windowScrollPosition: 0,
        };
    },
    components: {},
    computed: {
        ...mapState(['isHeaderSmall']),
    },
    methods: {
        ...mapMutations(['updateHeaderSmall']),

        scrollCheck() {
            if (this.isHeaderSmall) {
                this.isMenuScroll = false;
                return;
            }

            this.isScrollUp =
                this.windowScrollPosition - window.pageYOffset > 0;
            this.windowScrollPosition = window.pageYOffset;

            // показываем small меню при скроле вверх и при прокрутке страницы более 50
            if (
                this.isScrollUp ||
                (window.pageYOffset < 50 && !this.isScrollUp)
            ) {
                this.isMenuScroll = false;
            } else {
                this.isMenuScroll = true;
            }
        },
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.scrollCheck();
        });
    },
};
