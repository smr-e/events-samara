Vue.createApp({
    data() {
        return {
            currentPagePage: 'home',      // 'home' или 'event'
            currentEventId: null,         // id выбранного мероприятия

            searchQuery: '',
            selectedCategory: '',
            selectedDate: '',
            maxPrice: 5000,
            currentPage: 1,               // пагинация (начинается с 1)
            itemsPerPage: 6,              // 6 карточек на странице

            email: '',
            subscribeMessage: '',

            events: [
                {
                    id: 1,
                    category: 'Концерты',
                    date: '2026-06-15T19:00:00',
                    title: 'Летний концерт под открытым небом',
                    place: 'Набережная Самары',
                    description: 'Живая музыка, вечерняя атмосфера и лучшие городские исполнители.',
                    price: 0,
                    image: '/images/1.jpg'
                },
                {
                    id: 2,
                    category: 'Выставки',
                    date: '2026-06-16T18:00:00',
                    title: 'Современное искусство региона',
                    place: 'Самарский художественный музей',
                    description: 'Выставка работ молодых художников и интерактивные зоны.',
                    price: 300,
                    image: '../images/2.jpg'
                },
                {
                    id: 3,
                    category: 'Фестивали',
                    date: '2026-06-20T17:00:00',
                    title: 'Городской фестиваль еды',
                    place: 'Парк им. 50-летия Октября',
                    description: 'Кулинарные мастер-классы, дегустации и выступления местных артистов.',
                    price: 500,
                    image: '../images/3.jpg'
                },
                {
                    id: 4,
                    category: 'Театр',
                    date: '2026-06-22T19:00:00',
                    title: 'Гамлет',
                    place: 'Самарский драматический театр',
                    description: 'Классическая трагедия Шекспира в современной интерпретации.',
                    price: 800,
                    image: '../images/4.jpg'
                },
                {
                    id: 5,
                    category: 'Концерты',
                    date: '2026-06-25T20:00:00',
                    title: 'Рок-ночь Самары',
                    place: 'Клуб Attic',
                    description: 'Три локальные рок-группы на одной вечеринке.',
                    price: 600,
                    image: '../images/5.png'
                },
                {
                    id: 6,
                    category: 'Выставки',
                    date: '2026-06-28T18:00:00',
                    title: 'Фотография XXI века',
                    place: 'Центр современной культуры',
                    description: 'Выставка работ современных фотографов из России и Европы.',
                    price: 400,
                    image: '../images/6.jpg'
                },
                {
                    id: 7,
                    category: 'Фестивали',
                    date: '2026-07-01T16:00:00',
                    title: 'Музыкальный фестиваль на набережной',
                    place: 'Набережная Самары',
                    description: 'Открытая концертная программа с участием известных исполнителей.',
                    price: 1200,
                    image: '../images/7.jpg'
                },
                {
                    id: 8,
                    category: 'Театр',
                    date: '2026-07-05T19:00:00',
                    title: 'Вишнёвый сад',
                    place: 'Самарский драматический театр',
                    description: 'Пьеса Чехова в постановке известного режиссёра.',
                    price: 700,
                    image: '../images/8.jpg'
                },
                {
                    id: 9,
                    category: 'Концерты',
                    date: '2026-07-10T21:00:00',
                    title: 'Джазовый вечер',
                    place: 'Кровосток',
                    description: 'Незабываемый вечер джаза с лучшими музыкантами города.',
                    price: 900,
                    image: '../images/99.jpg'
                },
                {
                    id: 10,
                    category: 'Выставки',
                    date: '2026-07-15T18:00:00',
                    title: 'Современная скульптура',
                    place: 'Самарский художественный музей',
                    description: 'Выставка скульптурных работ современных авторов.',
                    price: 350,
                    image: '../images/10.jpg'
                },
                {
                    id: 11,
                    category: 'Фестивали',
                    date: '2026-07-20T17:00:00',
                    title: 'Летний книжный фестиваль',
                    place: 'Библиотека им. Горького',
                    description: 'Чтения, встречи с авторами и продажа книг.',
                    price: 200,
                    image: '../images/11.jpg'
                },
                {
                    id: 12,
                    category: 'Театр',
                    date: '2026-07-25T19:00:00',
                    title: 'Нора',
                    place: 'Театр юного зрителя',
                    description: 'Спектакль по пьесе Ібсена для молодой аудитории.',
                    price: 450,
                    image: '../images/12.png'
                },
                {
                    id: 13,
                    category: 'Концерты',
                    date: '2026-08-01T20:00:00',
                    title: 'Поп-ночь на набережной',
                    place: 'Набережная Самары',
                    description: 'Концерт поп-музыки с участием известных исполнителей.',
                    price: 1500,
                    image: '../images/13.jpg'
                },
                {
                    id: 14,
                    category: 'Выставки',
                    date: '2026-08-05T18:00:00',
                    title: 'Абстрактное искусство',
                    place: 'Центр современной культуры',
                    description: 'Выставка работ в стиле абстракционизма.',
                    price: 400,
                    image: '../images/14.jpg'
                },
                {
                    id: 15,
                    category: 'Фестивали',
                    date: '2026-08-10T16:00:00',
                    title: 'Фестиваль уличной еды',
                    place: 'Парк им. 50-летия Октября',
                    description: 'Стёйки с едой из разных стран мира.',
                    price: 300,
                    image: '../images/15.jpg'
                },
                {
                    id: 16,
                    category: 'Театр',
                    date: '2026-08-15T19:00:00',
                    title: 'Мастер и Маргарита',
                    place: 'Самарский драматический театр',
                    description: 'Спектакль по роману Булгакова.',
                    price: 850,
                    image: '../images/16.jpg'
                },
                {
                    id: 17,
                    category: 'Концерты',
                    date: '2026-08-20T21:00:00',
                    title: 'Электронная музыка night',
                    place: 'Клуб Attic',
                    description: 'Вечер электронной музыки с dj-set.',
                    price: 700,
                    image: '../images/17.jpg'
                },
                {
                    id: 18,
                    category: 'Выставки',
                    date: '2026-08-25T18:00:00',
                    title: 'Искусство будущего',
                    place: 'Самарский художественный музей',
                    description: 'Выставка экспериментальных работ молодых художников.',
                    price: 350,
                    image: '../images/18.jpg'
                }
            ]
        }
    },
    computed:
        {
            filteredEvents() {
                return this.events.filter(event => {
                    const matchesCategory = !this.selectedCategory || event.category === this.selectedCategory
                    const matchesSearch = event.title.toLowerCase().includes(this.searchQuery.toLowerCase())

                    // Фильтр по дате: только день, без времени
                    const eventDate = event.date.split('T')[0]
                    const matchesDate = !this.selectedDate || eventDate === this.selectedDate

                    const matchesPrice = event.price <= Number(this.maxPrice)

                    return matchesCategory && matchesSearch && matchesDate && matchesPrice
                })
            }
            ,
            totalPages() {
                return Math.ceil(this.filteredEvents.length / this.itemsPerPage)
            }
            ,
            paginatedEvents() {
                const start = (this.currentPage - 1) * this.itemsPerPage
                return this.filteredEvents.slice(start, start + this.itemsPerPage)
            }
            ,
            currentEvent() {
                return this.events.find(e => e.id === this.currentEventId) || {}
            }
            ,
            upcomingEvents() {
                const today = new Date('2026-06-08T00:00:00')
                const twoWeeksEnd = new Date('2026-06-22T23:59:59')

                return this.events
                    .filter(event => {
                        const eventDate = new Date(event.date)
                        return eventDate >= today && eventDate <= twoWeeksEnd
                    })
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .slice(0, 3)
            }
            ,

        }
    ,
    watch: {
        searchQuery() {
            this.currentPage = 1
        }
        ,
        selectedCategory() {
            this.currentPage = 1
        }
        ,
        selectedDate() {
            this.currentPage = 1
        }
        ,
        maxPrice() {
            this.currentPage = 1
        }
    }
    ,
    methods: {
        openEvent(eventId) {
            this.currentEventId = eventId
            this.currentPagePage = 'event'
            window.scrollTo(0, 0)
        }
        ,
        goBack() {
            this.currentPagePage = 'home'
            this.currentEventId = null
            window.scrollTo(0, 0)
        }
        ,
        setCategory(category) {
            this.selectedCategory = this.selectedCategory === category ? '' : category
        }
        ,
        resetFilters() {
            this.searchQuery = ''
            this.selectedCategory = ''
            this.selectedDate = ''
            this.maxPrice = 5000
            this.currentPage = 1
        }
        ,
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page
            }
        }
        ,
        formatDate(dateString) {
            const date = new Date(dateString)
            return new Intl.DateTimeFormat('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date)
        }
        ,
        formatPrice(price) {
            return price === 0 ? 'Бесплатно' : `${price} руб`
        }
        ,
        shareInVK() {
            const url = encodeURIComponent(window.location.href)
            const title = encodeURIComponent(this.currentEvent.title)
            const vkUrl = `https://vk.com/share.php?url=${url}&title=${title}`
            window.open(vkUrl, '_blank', 'width=600,height=400')
        }
        ,
        subscribe() {
            // Простая проверка email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(this.email)) {
                this.subscribeMessage = 'Пожалуйста, введите корректный email'
                return
            }

            // Здесь можно отправить email на сервер (для демо просто выводим сообщение)
            this.subscribeMessage = `Спасибо! Вы подписаны на новости с email: ${this.email}`
            this.email = ''
        }
    }
}).mount('#app');
