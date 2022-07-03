import Curtain from '@components/base/curtain/component';
import Footer from '@components/base/footer/component';
import Header from '@components/base/header/component';
import Modal from '@components/base/modal/modal.vue';
import onScrollAnimate from '@utilities/scrollAnimate';
import {
    Autoplay,
    Mousewheel,
    Navigation,
    Pagination,
    Swiper as SwiperClass,
} from 'swiper/core';
import Vue from 'vue';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import VueResource from 'vue-resource';
import { mapMutations, mapState } from 'vuex';

import { router } from './routes';
import { store } from './store';
import { meta } from './utilities/meta';

Vue.use(VueResource);

SwiperClass.use([Navigation, Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));

Vue.http.options.root = '/api';

Vue.component('curtain-cmp', Curtain);

Vue.directive('animation', {
    // Когда привязанный элемент вставлен в DOM...
    bind(el, binding) {
        // eslint-disable-next-line
        el.dataset.animate = false;
        if (binding.arg) {
            // eslint-disable-next-line
            el.dataset.animateDirection = binding.arg;
        }
        if (binding.modifiers) {
            Object.keys(binding.modifiers).forEach((item) => {
                // eslint-disable-next-line
                el.dataset[item] = binding.modifiers[item];
            });
        }
    },
});

// Директива v-link вместо элемента router-link
Vue.directive('link', {
    // Когда привязанный элемент вставлен в DOM...
    bind(el) {
        const href = el.getAttribute('href');
        // если ссылка внутренняя, то добавляем базовый язык впереди ссылки
        if (href.charAt(0) === '/') {
            el.setAttribute('href', router.history.base + href);
        }

        el.addEventListener('click', (e) => linkAction(e, el));
    },
    unbind(el) {
        el.removeEventListener('click', (e) => linkAction(e, el));
    },
});

// eslint-disable-next-line
router.afterEach((to, from) => {
    // topScrollNone используем в routes.js для страниц дочерних например, когда скролл наверх не нужен
    if (
        to.name !== from.name &&
        (!to.matched.some((record) => record.meta.topScrollNone) ||
            !from.matched.some((record) => record.meta.topScrollNone))
    ) {
        // скролл наверх страницы
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'instant',
            });
        }, 750);

        store.dispatch('meta/loadItems', to.path).then(() => {
            meta(store);
        });
    }

    setTimeout(() => {
        onScrollAnimate();
        window.addEventListener('scroll', onScrollAnimate);
    }, 1100);

    setTimeout(() => {
        store.commit('curtain/Show');
        window.content = undefined;
    }, 600);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {
        'header-cmp': Header,
        'modal-cmp': Modal,
        'footer-cmp': Footer,
    },
    data() {
        return {
            staticText: undefined,
            arrSearch: undefined,
            currentYear: undefined,
            loadVue: false,
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
        ...mapState('modal', ['tooltip']),
    },
    methods: {
        ...mapMutations('mobile', ['setIsMobile']),
        ...mapMutations('modal', ['Open', 'Close']),

        openModal(data) {
            this.disableScroll();
            this.Open(data);
        },
        closeModal() {
            this.enableScroll();
            this.Close();
        },
        disableScroll() {
            const body = document.querySelector('body');
            if (body.style.position !== 'fixed') {
                const heightScroll = window.pageYOffset;

                if (this.hasScrollbar()) {
                    body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll;`;
                } else {
                    body.style.cssText = `top: ${-heightScroll}px; position: fixed;`;
                }
            }
        },
        enableScroll() {
            const body = document.querySelector('body');
            const heightTop = body.style.top;

            if (heightTop) {
                body.style.cssText =
                    'top: auto; position: static; overflow-y: auto;';
                window.scrollTo({
                    top: -parseInt(heightTop, 10),
                    behavior: 'instant',
                });
            }
        },
        // проверка на боковой скролл
        hasScrollbar() {
            return document.body.offsetHeight > window.innerHeight;
        },
        setDataAnimateFalse(selector = '') {
            document
                .querySelectorAll(`${selector} [data-animate="true"]`)
                .forEach((item) => {
                    item.setAttribute('data-animate', false);
                    item.setAttribute('data-delay', true);
                });
        },
    },
    created() {
        this.setIsMobile();
        window.addEventListener('resize', () => this.setIsMobile());

        this.staticText = window.staticText;
        this.arrSearch = window.arrSearch;

        // расчет текущего года для футера
        this.currentYear = new Date().getFullYear();
    },
    beforeMount() {
        const content = document.getElementById('content');
        window.content = content.innerHTML;
        if (typeof content.remove === 'function') {
            // If support  is found
            content.remove();
        } else {
            // If not
            content.outerHTML = '';
        }
    },
    mounted() {
        this.loadVue = true;
    },
});

// переход по ссылке
function linkAction(e, item) {
    e.preventDefault();
    if (item.getAttribute('to')) {
        router.push(item.getAttribute('to')).catch(() => {});
    } else {
        const path = item.getAttribute('href');
        if (path.charAt(0) === '/') {
            if (router.currentRoute.path !== path) {
                router
                    .push(path.replace(router.history.base, ''))
                    .catch(() => {});
            }
        } else {
            window.open(item.href, '_blank').focus();
        }
    }
}
