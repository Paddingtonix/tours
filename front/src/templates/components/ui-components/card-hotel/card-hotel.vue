<template>
    <a
        v-animation:bottom.delay
        v-link
        :href="card.link"
        :key="card.id"
        class="card-hotel card-style"
    >
        <div class="card-hotel__top">
            <div class="card-hotel-rating">
                <div class="card-hotel-rating__container btn">
                    {{ card.rating }}
                </div>
                <div class="card-hotel-rating__text">
                    {{ card.ratingCount }}
                    <span
                        v-text="$root.num2str(card.ratingCount, reviewsText)"
                    ></span>
                </div>
            </div>
            <div class="card-hotel__slider">
                <card-slider-cmp
                    :slider="card.slider"
                    :name="card.name"
                ></card-slider-cmp>
            </div>
        </div>
        <div class="card-hotel__wrap">
            <div class="card-hotel__place">{{ card.place }}</div>
            <div class="card-hotel__name">
                <template v-if="card.stars">
                    {{ card.stars }}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.05929 4.60871C9.377 3.72767 10.623 3.72767 10.9407 4.60871L11.6977 6.70783C11.8367 7.09334 12.1968 7.35501 12.6064 7.3681L14.8367 7.43933C15.7728 7.46923 16.1579 8.65425 15.4181 9.22866L13.6556 10.5972C13.332 10.8486 13.1944 11.272 13.3085 11.6656L13.93 13.8087C14.1908 14.7082 13.1828 15.4406 12.4079 14.9146L10.5617 13.6613C10.2226 13.4311 9.77741 13.4311 9.43834 13.6613L7.59213 14.9146C6.81724 15.4406 5.8092 14.7082 6.07003 13.8087L6.69148 11.6656C6.80561 11.272 6.66804 10.8486 6.34435 10.5972L4.58188 9.22866C3.84214 8.65425 4.22718 7.46923 5.16327 7.43933L7.39356 7.3681C7.80316 7.35501 8.16333 7.09334 8.30234 6.70783L9.05929 4.60871Z"
                            fill="#F27E29"
                        />
                    </svg>
                </template>
                {{ card.name }}
            </div>
            <div class="card-hotel-add">
                <div
                    v-for="item in card.additional"
                    class="card-hotel-add__item"
                >
                    <div v-if="item.img" class="card-hotel-add__img">
                        <img :src="item.img" :alt="item.name" />
                    </div>
                    <div class="card-hotel-add__name">{{ item.name }}</div>
                </div>
            </div>
            <div class="card-hotel__btn">
                <div class="card-hotel__btn-container btn">
                    <span class="card-hotel__btn-price _rouble">
                        {{ from }}
                        {{
                            card.price
                                .toString()
                                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
                        }}
                    </span>
                    <span class="card-hotel__btn-subtext">
                        / {{ countText }}</span
                    >
                </div>
            </div>
        </div>
    </a>
</template>

<script>
import cardSlider from "@components/ui-components/card-slider/card-slider";

export default {
    name: "card-hotel",
    props: ['card', 'reviewsText', 'from', 'count-text'],
    components: {
        'card-slider-cmp': cardSlider,
    },
}
</script>

<style scoped></style>
