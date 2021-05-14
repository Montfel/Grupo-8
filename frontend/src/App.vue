<template>
    <div id="app">
        <Menu />
        <Conteudo />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Menu from "@/components/template/Menu"
import Conteudo from "@/components/template/Conteudo"
// import { baseApiUrl, userKey} from '@/global.js'
// import axios from 'axios'

export default {
    name: "App",
    components: {Menu, Conteudo},
    computed: mapState(['user']),
    data: function() {
        return {
            // validandoToken: true,
        }
    }, 
    methods: {
    //     async validarToken() {
    //         this.validandoToken = true

    //         const json = localStorage.getItem(userKey)
    //         const userData = JSON.parse(json)
    //         this.$store.commit('setUser', null)

    //         if (!userData) {
    //             this.validatingToken = false
    //             if (window.location.pathname != "/") {
    //                 return this.$router.push({ name: 'Home' })
    //             }

    //             return
    //         }

    //         const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

    //         if (res.data) {
    //             this.$store.commit('setUser', userData)
    //         } else {
    //             localStorage.removeItem(userKey)
    //             this.$router.push({ name: 'Home' })
    //         }

    //         this.validatingToken = false
    //     }
    // },
    // created() {
    //         this.validarToken()
    }
    
}

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background:#ffff;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #32728f;
    }
</style>