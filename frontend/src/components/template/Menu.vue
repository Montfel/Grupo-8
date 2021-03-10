<template>
    <header class="header">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
                <b-navbar-brand href="#">
                    <img src="../../assets/logo.png" width="60px" alt="logo" id="brand">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav id="navbar-nav">
                        <b-nav-item href="#" class="nav-item">SERVIÇOS</b-nav-item>
                        <b-nav-item href="#" class="nav-item">CORPO CLÍNICO</b-nav-item>
                        <b-nav-item href="#" class="nav-item">PACIENTES</b-nav-item>
                        <b-nav-item href="#" class="nav-item">UNIDADES DE SAÚDE</b-nav-item>
                        <router-link v-if="!user" to="/login" class="nav-item" id="btn-login">
                            <i class="fa fa-user"></i>
                            LOGIN
                        </router-link>
                        <a href @click.prevent="logout()" v-if="user" class="nav-item" id="btn-logout">
                            <i class="fa fa-sign-out fa-lg"></i>
                        </a>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>

<script>
import { userKey } from '@/global'

export default {
    name: "Menu",
    props: {
        user: Boolean
    },
    methods: {
        logout() {
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({ name: 'Autenticacao' })
        }
    }

}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #brand {
        border-radius: 100%;
        margin-left: 50px;
    }

    #nav-collapse {
        margin-left: 140px;
    }

    .nav-item {
        margin-left: 50px;
    }

    #navbar {
        background-color: #79b0c9 !important;
    }

    #btn-login {
        border: 1px solid rgba(255, 255, 255, 0.733);

        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;

        border-top-right-radius: 10%;
        border-bottom-right-radius: 10%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: rgba(255, 255, 255, 0.733);
        padding: 5px;
    }

    #btn-logout {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: rgba(255, 255, 255, 0.733);
        padding: 5px;
    }


</style>