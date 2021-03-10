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
// import { baseApiUrl, userKey} from '@/global.js'
// import axios from 'axios'

export default {
    name: "App",
    components: {Menu, Rodape, Conteudo},
    data: function() {
        return {

        }
    }
}

</script>

<style>

</style>