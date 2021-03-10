import Vue from 'vue'
import VueRouter from 'vue-router'

import Autenticacao from "@/components/autenticacao/Autenticacao"

Vue.use(VueRouter)

const rotas = [{
    name: 'Autenticacao',
    path: '/auth',
    component: Autenticacao
}]

export default new VueRouter({
    mode: 'history',
    routes: rotas
})