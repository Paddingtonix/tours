<template>
    <div ref="document" class="dropdown" @click="open">
        <input
            :placeholder="props.type"
            class="input"
            :value="activeItem"
            readonly
        />
        <svg
            class="arrow-down"
            :class="{ _activeArrowDowm: openDropdown }"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L15.2929 8.29289ZM10 15L10.7071 15.7071C10.3166 16.0976 9.68342 16.0976 9.29289 15.7071L10 15ZM3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L3.29289 9.70711ZM16.7071 9.70711L10.7071 15.7071L9.29289 14.2929L15.2929 8.29289L16.7071 9.70711ZM9.29289 15.7071L3.29289 9.70711L4.70711 8.29289L10.7071 14.2929L9.29289 15.7071Z"
                fill="#8A919C"
            />
        </svg>
        <transition name="fade">
            <div v-if="openDropdown" class="dropdown-list card-style">
                <div v-for="item in props.name" :key="item.name">
                    <span
                        @click="selectItem(item.id, item.name)"
                        class="dropdown-list__item"
                        >{{ item.name }}</span
                    >
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    props: ['props'],
    data() {
        return {
            openDropdown: false,
            activeItem: ""
        };
    },
    methods: {
        open() {
            this.openDropdown = !this.openDropdown
        },

        closeDropdown() {
            this.openDropdown = false
        },

        selectItem(id, value) {
            this.activeItem = value
            this.closeDropdown
            this.$emit("add-from-field", id)
        }
    }
}
</script>
