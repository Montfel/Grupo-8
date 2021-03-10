import Vue from 'vue'
import VueRouter from 'vue-router'

import Autenticacao from "@/components/autenticacao/Autenticacao"
import RegistroMedico from "@/components/registros/RegistroMedico"
import Home from "@/components/home/Home"

import { userKey } from '@/global'

Vue.use(VueRouter)

const rotas = [{
    name: 'Autenticacao',
    path: '/login',
    component: Autenticacao
    
},{ name: 'Home',
    path: '/',
    component: Home
},{
    name: 'Registro Medico',
    path: '/registros/medico',
    component: RegistroMedico,
    meta: { requiresAdmin: true }
}]

const router = new VueRouter({
    mode: 'history',
    routes: rotas
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.adm ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router