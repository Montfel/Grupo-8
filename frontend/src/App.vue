<template>
    <div id="app">
        <Menu />
        <Conteudo />
        <Rodape />
    </div>
</template>

<script>
import Menu from "@/components/template/Menu"
import Rodape from "@/components/template/Rodape"
import Conteudo from "@/components/template/Conteudo"
import { baseApiUrl, userKey} from '@/global.js'
import axios from 'axios'

export default {
    name: "App",
    components: {Menu, Rodape, Conteudo},
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
                return this.$router.push({ name: 'auth' })
            }

            const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

            if (res.data) {
                this.$store.commit('setUser', userData)
            } else {
                localStorage.removeItem(userKey)
                this.$router.push({ name: 'auth' })
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