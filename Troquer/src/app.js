var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter)

Vue.config.debug = true

var App = require('./App.vue');

var router = new VueRouter()

router.map({
    '/': {
        component: require('./Index.vue')
    },
    '/code/:id': {
        component:require('./Download.vue')
    }
})

router.redirect({
    '*': '/'
})

router.start(App, '#app')
