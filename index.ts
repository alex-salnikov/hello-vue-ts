console.log('running index.ts')

export default (id: string) => {
    console.log('running index.ts/default()')

    const viewHome = httpVueLoader('view/home.vue')
    const viewPage1 = httpVueLoader('view/page1.vue')


    // Router and App setup
    const routes = [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: viewHome
        },
        {
            path: '/page1',
            name: 'page1',
            component: viewPage1
        }
    ]

    const router = new VueRouter({
        routes: routes
    })
    router.beforeResolve(async (to, from, next) => {
        app.menuHide()
        next()
    })

    const app = new Vue({
        router: router,
        methods: {
            menuHide() {
                const el = document.getElementById("myLinks")
                el.style.display = "none"
            },
            menuToggle() {
                const el = document.getElementById("myLinks")
                el.style.display = (el.style.display === "block") ? "none" : "block"
            }
        }
    }).$mount(id)
};