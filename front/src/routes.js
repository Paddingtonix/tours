import E404 from '@pages/404/index';
import Index from '@pages/index';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: Index,
        meta: {
            isHeaderSmall: true,
        },
    },
    {
        path: '/404',
        name: '404',
        component: E404,
    },
    {
        path: '*',
        component: E404,
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        let position = { x: 0, y: 0 };

        if (savedPosition) {
            position = savedPosition;
        }

        return new Promise((resolve) => {
            if (to.name === from.name) {
                resolve();
            } else {
                setTimeout(() => {
                    resolve(position);
                }, 1000);
            }
        });
    },
});
