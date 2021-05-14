import Vue from 'vue'
import VueRouter from 'vue-router'

import Autenticacao from "@/components/autenticacao/Autenticacao"
import RegistroMedico from "@/components/registros/RegistroMedico"
import RegistroPaciente from "@/components/registros/RegistroPaciente"
import SolicitarExame from "@/components/registros/SolicitarExame"
import EnvioLaudo from "@/components/registros/EnvioLaudo"
import Home from "@/components/home/Home"
import dashboard from "@/components/dashboard/dashboard"


import validacoes from './routerValidation';

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
    meta: { requiresAuth: true, requiresAdmin: true }
},{
    name: 'Registro Paciente',
    path: '/registros/paciente',
    component: RegistroPaciente,
    meta: { requiresAuth: true, requiresMedOrAdmin: true }
},{
    name: 'Cadastro Exame',
    path: '/registros/exame',
    component: SolicitarExame,
    meta: { requiresAuth: true, requiresMedOrProf: true}
},{
    name: 'Envio do Laudo',
    path: '/registros/laudo',
    component: EnvioLaudo,
    meta: { requiresAuth: true, requiresResidente: true }
},{
    name: 'Dashboard',
    path: '/dashboard',
    component: dashboard,
}]

const router = new VueRouter({
    mode: 'history',
    routes: rotas
})

router.beforeEach(async (to, from, next) => {
    const metas = Object.keys(to.meta)
    
    if (to.matched.some(record => record.meta.requiresAuth)) {

        let valido = false;
        for (const key in metas) {
            if (await validacoes[`validar_${metas[key]}`]()) {
                valido = true;

            } else {
                valido = false;
                break
            }
        }

        if (valido) {
            next()

        } else {
            next({path: '/'})
        }
        
    } else {
        next()
    }
})


export default router