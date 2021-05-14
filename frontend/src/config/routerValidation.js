import { userKey, baseApiUrl } from '@/global'
import store from './store.js'
import axios from 'axios'

const json = localStorage.getItem(userKey)
const userData = JSON.parse(json)

const validacoes = {
    async validar_requiresMedOrAdmin() {
        if (await this.validar_requiresAdmin() || await this.validar_medico()) {
            return true
        } 
        return false;
    },

    async validar_requiresMedOrProf() {
        if (await this.validar_medico() || await this.validar_medico('professor')) {
            return true
        }
        return false;
    },

    async validar_requiresAuth() {
        store.commit('setUser', null)

        const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

        if (res.data) {
            store.commit('setUser', userData)
            return true

        } else {
            localStorage.removeItem(userKey)
            return false;
        }
    },

    async validar_requiresAdmin() {
        if (userData.adm) {
            return true
        }

        return false
    },

    async validar_requiresResidente() {
        const medico = await axios
            .get(`${baseApiUrl}/medicos/profissional/${userData.id_pessoa}`)
        
        const res = await axios
            .get(`${baseApiUrl}/medicos/residente/${medico.data[0].crm}`)

        if (res.data.length) {
            return true
        }
        return false
    },

    async validar_medico() {
        const res = await axios.get(`${baseApiUrl}/medicos/profissional/${userData.id_pessoa}`)

        if (res.data.length) {
            return true
        }
        return false
    }
}

export default validacoes;