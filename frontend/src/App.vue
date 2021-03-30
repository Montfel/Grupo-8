<template>
    <div id="app">
        <Menu :login="user"/>
        <Conteudo />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Menu from "@/components/template/Menu"
import Conteudo from "@/components/template/Conteudo"
import { baseApiUrl, userKey} from '@/global.js'
import axios from 'axios'

export default {
    name: "App",
    components: {Menu, Conteudo},
    computed: mapState(['user']),
    data: function() {
        return {
            validandoToken: true
        }
    }, methods: {

        async validarToken() {
            this.validandoToken = true

            const json = localStorage.getItem(userKey)
            const userData = JSON.parse(json)
            this.$store.commit('setUser', null)

            if (!userData) {
                this.validatingToken = false
                return this.$router.push({ name: 'Autenticacao' })
            }

            const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

            if (res.data) {
                this.$store.commit('setUser', userData)
            } else {
                localStorage.removeItem(userKey)
                this.$router.push({ name: 'Autenticacao' })
            }

            this.validatingToken = false
        }, 
        created() {
            this.validateToken()
        }
    }
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>