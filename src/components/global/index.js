import Header from './Header.vue'
import CardUser from './CardUser.vue'

const components = [
    {name: 'Header', component: Header},
    {name: 'CardUser', component: CardUser},
]


export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}