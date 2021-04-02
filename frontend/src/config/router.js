import Vue from 'vue'
import VueRouter from 'vue-router'

import Autenticacao from "@/components/autenticacao/Autenticacao"
import RegistroMedico from "@/components/registros/RegistroMedico"
import RegistroPaciente from "@/components/registros/RegistroPaciente"
import SolicitarExame from "@/components/registros/SolicitarExame"
import EnvioLaudo from "@/components/registros/EnvioLaudo"
import Home from "@/components/home/Home"

import { userKey } from '@/global'

Vue.use(VueRouter)

const rotas = [
    { name: 'Home',
    path: '/',
    component: Home
},{
    name: 'Autenticacao',
    path: '/login',
    component: Autenticacao
},{
    name: 'Registro Medico',
    path: '/registros/medico',
    component: RegistroMedico,
    meta: { requiresAdmin: true }
},{
    name: 'Registro Paciente',
    path: '/registros/paciente',
    component: RegistroPaciente,
    meta: { requiresAdmin: true }
},{
    name: 'Cadastro Exame',
    path: '/registros/exame',
    component: SolicitarExame,
    meta: { requiresAdmin: true }
},{
    name: 'Envio do Laudo',
    path: '/registros/laudo',
    component: EnvioLaudo,
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
        user && user.adm ? next() : next({ path: '/login' })
    } else {
        next()
    }
})

export default router