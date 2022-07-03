/* eslint-disable no-unused-vars */
const data = {
    tour: {
        id: 1,
        title: 'Тур в Рас-аль-Хайм', // наименование тура
        visa: 0, // 0 - не нужна, 1 - нужна
        logo: '/uploads/img/tour/logo-tour.png', // логотоп тур-оператора
        slider: [
            '/uploads/img/tour/preview.png',
            '/uploads/img/tour/preview.png',
            '/uploads/img/tour/preview.png',
        ], // превью отеля
        stars: 5, // кол-во звезд отеля
        rating: 7.9, // рейтинг отеля
        ratingCount: 66,
        name: 'Jannah Burj Al Sarab', // наименование отеля
        place: 'ОАЭ, Рас-аль-Хайм', // расположение
        typeFood: {
            img: '/uploads/img/tour/IconOne.png',
            name: 'HB — завтрак, ужин',
        },
        typeLocation: {
            img: '/uploads/img/tour/IconTwo.png',
            name: '(DBL) Luxury Resort View',
        },
        description:
            '<p>Отель Puding Marina Residence расположен в Анталии, в самом центре исторического района Калеичи. К услугам гостей 6 исторических особняков, открытый бассейн и бар у бассейна. Из отеля открывается уникальный панорамный вид на горы и Средиземное море, которое раскинулось под скалами высотой 30 метров. Прогулка до пляжа Мермерли и старой пристани для яхт занимает менее 5 минут. В элегантных номерах установлен кондиционер, телевизор с плоским экраном, сейф, мини-бар и электрический чайник.</p>' +
            '</br>' +
            '<p>В собственной ванной комнате гости могут воспользоваться феном. На всей территории работает бесплатный Wi-Fi.</p>' +
            '</br>' +
            '<p>Каждое утро в бар-ресторане Puding для гостей накрывают завтрак «шведский стол». Стойка регистрации работает круглосуточно. После насыщенного дня гости могут отдохнуть в саду отеля Puding Marina Residence.</p>' +
            '</br>' +
            '<p>В районе Калеичи расположено множество антикварных магазинов и старинных мечетей. Отель Puding Marina Residence находится всего в 500 метрах от ворот Адриана. Трамвайная линия проходит в 700 метрах. До аэропорта Анталии можно добраться на автомобиле за 25 минут.</p>',
        main: [
            {
                id: 1,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Jannah Burj Al Sarab',
            },
            {
                id: 2,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Отель, 72 номера',
            },
            {
                id: 3,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Построен в 1988 году',
            },
            {
                id: 4,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Обновлен в 2011 году',
            },
            {
                id: 5,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Персонал говорит на языках: английский, арабский',
            },
            {
                id: 6,
                img: '/uploads/img/tour/IconThree.png',
                name: 'Заезд с 14:00, выезд до 12:00',
            },
            {
                id: 7,
                img: '/uploads/img/tour/IconThree.png',
                name: '24 часа',
            },
        ],
        hotelFacilities: [
            {
                id: 1,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 2,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 3,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 4,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 5,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 6,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 7,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 8,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 9,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
        ],
        roomFacilities: [
            {
                id: 1,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 2,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 3,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 4,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 5,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 6,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 7,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
            {
                id: 8,
                img: '/uploads/img/tour/IconThree.png',
                name: 'HB — завтрак, ужин',
            },
        ],
    },
    flight: [
        {
            id: 1,
            img: '/uploads/img/tour/AirlinesLogo.png',
            name: 'S7 Airlines',
            startTime: '09:25',
            startDate: '14 мар, чт',
            startCity: 'Москва',
            startAirport: 'Толмачева',
            shortStartAirport: 'DME',
            flightTime: '4 ч 50 м в пути',
            endTime: '09:25',
            endDate: '14 мар, чт',
            endCity: 'Рас-аль-Хайм',
            endAirport: 'Рас-аль-Хайма',
            shortEndAirport: 'RKT',
            noLuggage: 1,
            smallLuggage: 1,
            trip: 'прямой рейс',
        },
        {
            id: 2,
            img: '/uploads/img/tour/AirlinesLogo.png',
            name: 'S7 Airlines',
            startTime: '09:25',
            startDate: '14 мар, чт',
            startCity: 'Москва',
            startAirport: 'ДомодедовоDME',
            shortStartAirport: 'DME',
            flightTime: '4 ч 50 м в пути',
            endTime: '09:25',
            endDate: '14 мар, чт',
            endCity: 'Рас-аль-Хайм',
            endAirport: 'Рас-аль-Хайма',
            shortEndAirport: 'RKT',
            noLuggage: 1,
            smallLuggage: 1,
            trip: 'прямой рейс',
        },
    ],
    insurance: [
        {
            id: 1,
            name: '50 000 € (без франшизы), спокойный отдых',
            desc: 'Амбулаторное лечение, неотложное посещение врача, стоматология, расходы за лекарства по рецепту',
            img: '/uploads/img/tour/SB.png',
            link: '/',
        },
    ],
    transfer: [
        {
            id: 1,
            img: '/uploads/img/tour/Bus.png',
            type: 'Групповой',
            title: 'Проезд в комфортабельных автобусах',
            desc: 'Аэропорт — отель — аэропорт',
        },
    ],
    confirm: {
        dates: '12 апреля — 19 апреля',
        days: '7 ночей',
        count: '2 взрослых',
        startCost: 42629,
        discount: 3309,
        finalCost: 109025,
    },
    aboutRoom: {
        slider: [
            '/uploads/img/tour/room.png',
            '/uploads/img/tour/room.png',
            '/uploads/img/tour/room.png',
        ],
        desc: '<p>2 двуспальные кровати или 1 двуспальная кровать (200 х 150 см). Гостям, проживающим в номере Ocean Queen/King Room, предоставляется неограниченный бесплатный доступ к аквапарку Aquaventure и аквариуму Lost Chambers, а также льготные тарифы в дельфинарии. Кроме того, будет 1 бесплатное дневное занятие в детском клубе Kids Club или в The Zone для маленьких гостей.',
    },
    reviewsRating: {
        desc: 'Превосходный бюджетный отель. Прекрасный бассейн. Отличное расположение. Великолепная атмосфера',
        detailed: [
            {
                id: 1,
                name: 'Персонал',
                value: 8.9,
            },
            {
                id: 2,
                name: 'Чистота',
                value: 8.8,
            },
            {
                id: 3,
                name: 'Расположение',
                value: 9.5,
            },
            {
                id: 4,
                name: 'Удобство',
                value: 8.6,
            },
            {
                id: 5,
                name: 'Комфорт',
                value: 8.7,
            },
            {
                id: 6,
                name: 'Цена/качество',
                value: 8.8,
            },
        ],
        sort: [
            {
                value: null,
                name: 'Сначала новые',
            },
            {
                value: 'high',
                name: 'С высокой оценкой',
            },
            {
                value: 'low',
                name: 'С низкой оценкой',
            },
            {
                value: 'photo',
                name: 'С фото',
            },
        ],
        comments: [
            {
                id: 1,
                assessment: '9.0',
                name: 'Konstantin K.',
                date: 'декабрь 2021',
                room: 'Standart DBl',
                duration: '4 ночи',
                season: 'Ноябрь 2021',
                comment:
                    'ОООтличное расположение) Уютная комната, боковой вид на море, конечно не супер, летом из-за растений наверное и совсем не видно моря. персонал замечательный, по русски хорошо говорят. всегда убирали в номере. завтраки вкусные и выбор приличный. есть парковка для Авто. номер просторный. кровать шикарная, большая, удобная, одеяло хотелось бы одно большое, а не 2 маленьки)',
                img: [
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                ],
            },
            {
                id: 2,
                assessment: '9.0',
                name: 'Konstantin K.',
                date: 'декабрь 2021',
                room: 'Standart DBl',
                duration: '4 ночи',
                season: 'Ноябрь 2021',
                comment:
                    'ЗАОтличное расположение) Уютная комната, боковой вид на море, конечно не супер, летом из-за растений наверное и совсем не видно моря. персонал замечательный, по русски хорошо говорят. всегда убирали в номере. завтраки вкусные и выбор приличный. есть парковка для Авто. номер просторный. кровать шикарная, большая, удобная, одеяло хотелось бы одно большое, а не 2 маленьки)',
                img: [
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                ],
            },
            {
                id: 3,
                assessment: '9.0',
                name: 'Konstantin K.',
                date: 'декабрь 2021',
                room: 'Standart DBl',
                duration: '4 ночи',
                season: 'Ноябрь 2021',
                comment:
                    'ОАОтличное расположение) Уютная комната, боковой вид на море, конечно не супер, летом из-за растений наверное и совсем не видно моря. персонал замечательный, по русски хорошо говорят. всегда убирали в номере. завтраки вкусные и выбор приличный. есть парковка для Авто. номер просторный. кровать шикарная, большая, удобная, одеяло хотелось бы одно большое, а не 2 маленьки)',
                img: [
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                    '/uploads/img/tour/roomInner.png',
                ],
            },
        ],
    },
};
