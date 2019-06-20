import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Servicesingle from './views/Service-single'

import Header from './components/Header'
import StyleSwitcher from './components/StyleSwitcher'
import Slider from './components/Slider'
import ServiceBox from './components/ServiceBox'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Maincontainer from './components/Maincontainer'
import Subpagetitle from './components/Subpagetitle'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: '/service-single',
          name: 'service-single',
          component: Servicesingle
      },
    ]
})