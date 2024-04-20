import Header from './Header.vue'
import CardUser from './CardUser.vue'
import UFile from './UFile.vue'
import WordBlock from './WordBlock.vue'
import CardForYou from './CardForYou.vue'


const components = [
    {name: 'Header', component: Header},
    {name: 'CardUser', component: CardUser},
    {name: 'UFile', component: UFile},
    {name: 'WordBlock', component: WordBlock},
    {name: 'CardForYou', component: CardForYou},
]


export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}