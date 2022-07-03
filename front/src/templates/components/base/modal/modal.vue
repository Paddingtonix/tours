<template>
    <transition name="fade">
        <div
            v-if="modalComponent"
            :key="modalComponent"
            class="modal"
            @click="$root.closeModal()"
        >
            <div class="modal__wrap" @click.stop="">
                <div class="modal__head">
                    <h2 v-if="modalProps.title" class="modal__title title">
                        {{ modalProps.title }}
                    </h2>
                    <div @click="$root.closeModal()" class="modal__close">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 3L17 17"
                                stroke="#5D7982"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                            <path
                                d="M17 3L3 17"
                                stroke="#5D7982"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                </div>
                <component
                    v-bind:is="modalComponent"
                    :props="modalProps"
                ></component>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import modalAboutRoom from "@src/templates/components/base/modal/about-room/about-room.vue"
import ratingReviews from "@components/base/modal/rating-reviews/rating-reviews.vue"


export default {
    data() {
        return {}
    },
    components: {
        modalAboutRoom,
        ratingReviews,
    },
    computed: {
        /**
         * Про modalProps
         * title - заголовок
         */
        ...mapGetters('modal', ['modalComponent', 'modalProps']),
    },
    mounted() {

    }
}
</script>

<style lang="sass"></style>
