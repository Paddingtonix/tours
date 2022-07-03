// import Vue from 'vue';
// import createPersistedState from 'vuex-persistedstate';

export default {
    namespaced: true,
    state: {
        totalPrice: null,
        flightPrice: 0,
        insurancePrice: 0,
        transferPrice: [],
        finallyPriceExcursion: [],
        excursions: false,
        general: null,
        step: 1,
        flightId: 0,
        insuranceId: 0,
        excursionId: null,
        transferSum: null,
        excursionSum: null,
        finalPriceTour: null,
        numberOfTourists: [
            {
                id: 1,
                treaty: 1,
                type: '18 лет и старше, на него будет оформлен договор',
                gender: 0, // 0 - женский, 1 - мужской
                surname: '',
                name: '',
                birthday: '',
                citizenship: '',
                document: [
                    { name: 'Загранпаспорт', id: 1 },
                    { name: 'Паспорт РФ', id: 2 },
                    { name: 'Другой документ', id: 3 },
                ],
                passportID: null,
                validity: '',
            },
            {
                id: 2,
                treaty: 0,
                type: '18 лет и старше',
                gender: 0, // 0 - женский, 1 - мужской
                surname: '',
                name: '',
                birthday: '',
                citizenship: '',
                document: [
                    { name: 'Загранпаспорт', id: 1 },
                    { name: 'Паспорт РФ', id: 2 },
                    { name: 'Другой документ', id: 3 },
                ],
                passportID: null,
                validity: '',
            },
            {
                id: 3,
                treaty: 0,
                gender: 0, // 0 - женский, 1 - мужской
                surname: '',
                name: '',
                birthday: '',
                citizenship: '',
                document: [
                    { name: 'Загранпаспорт', id: 1 },
                    { name: 'Паспорт РФ', id: 2 },
                    { name: 'Другой документ', id: 3 },
                ],
                passportID: null,
                validity: '',
            },
        ],
    },
    getters: {},
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setPrice(state, value) {
            state.totalPrice = value;
        },
        changeStep(state, value) {
            if (value === undefined) {
                state.step += 1;
            } else {
                state.step = value;
            }
        },
        changeGender(state, value) {
            state.numberOfTourists.forEach((item) => {
                if (item.id === value.id) {
                    item.gender = value.value;
                }
            });

            state.numberOfTourists.find((item) => item.id === value);
        },
        changePoint(state, value) {
            state.point[value] = true;
            if (state.totalPrice === state.flightPrice) {
                state.point.flight = false;
            }
            if (state.totalPrice === state.insurancePrice) {
                state.point.insurance = false;
            }
            if (state.totalPrice === state.transferPrice) {
                state.point.transfer = false;
            }
        },
        setBooking(state, category) {
            state.booking.push(category);
        },
        setExcursion(state, data) {
            state.excursions = data;
        },
        setFlightId(state, value) {
            state.flightId = value;
        },
        setInsuranceId(state, value) {
            state.insuranceId = value;
        },
        setTransferId(state, value) {
            state.transferId = value;
        },
        setExcursionId(state, value) {
            state.excursionId = value;
        },
        setGeneral(state, value) {
            state.general = value;
        },
        setFlightPrice(state, value) {
            state.flightPrice = value;
        },
        setInsurancePrice(state, value) {
            state.insurancePrice = value;
        },
        setTransferSum(state, value) {
            state.transferSum = value;
        },
        setFinalPriceTour(state, value) {
            state.finalPriceTour = value;
        },
        // коммент написать !!!!! value
        setTransferPrice(state, value) {
            const transferId = state.transferPrice.find(
                (item) => item.id === value.id,
            );
            if (!transferId) {
                state.transferPrice.push(value);
            } else {
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < state.transferPrice.length; i++) {
                    if (state.transferPrice[i].id === value.id) {
                        state.transferPrice.splice(i, 1);
                    }
                }
            }
        },
        setFinallyPriceExcursion(state, value) {
            console.log(value);
            const excursionId = state.finallyPriceExcursion.find(
                (item) => item.id === value.id,
            );
            if (!excursionId) {
                state.finallyPriceExcursion.push(value);
            }
            // else {
            //     // eslint-disable-next-line no-plusplus
            //     for (let i = 0; i < state.finallyPriceExcursion.length; i++) {
            //         if (state.finallyPriceExcursion[i].id === value.id) {
            //             state.finallyPriceExcursion.splice(i, 1);
            //         }
            //     }
            // }ё

            state.excursionSum = state.finallyPriceExcursion.map(
                (item) => item.price,
            );
            state.excursionSum = state.excursionSum.reduce(
                (sum, elem) => sum + elem,
                0,
            );
        },
    },
    actions: {},
};
