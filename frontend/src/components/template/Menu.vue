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
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>

<script>
export default {
    name: "Menu"
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

</style>