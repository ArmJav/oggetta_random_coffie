import Header from './Header.vue'
import CardUser from './CardUser.vue'
import but from './but.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'CardUser', component: CardUser},
    {name: 'but', component: but},
]


export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}