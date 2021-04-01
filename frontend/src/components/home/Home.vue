<template>
    <div class="home">
        <div id="slider" class="block">
            <div class="container pt-5">
            <div class="row">
                <div class="col-lg-4 col-md-6 align-self-center mb-md-0 mb-4">
                <h1>Venha fazer seu exame com a gente</h1>
                <h4 class="mb-4">marque ja sua consulta</h4>
                <a
                    href="#"
                    class="button btn btn-primary button-primary d-md-inline-block d-block mb-md-0 mb-2 mr-md-2"
                    >agendar consulta</a
                >
                <a
                    href="#"
                    class="button btn btn-outline-primary button-primary-outline d-md-inline-block d-block"
                    >marcar exame</a
                >
                </div>
                <div class="col-lg-8 col-md-6 align-self-center text-center">
                <img src="../../assets/cardio.jpg" class="img-fluid" />
                </div>
            </div>
            </div>
        </div>

        <div id="sobre" class="block">
            <div class="container">
                <div class="row">
                <div
                    class="col-md-6 align-self-center text-center order-md-1 order-2"
                >
                    <img src="../../assets/coracao.jpg" class="img-fluid" />
                </div>
                <div
                    class="col-md-6 align-self-center order-md-2 order-1 mb-md-0 mb-4"
                >
                    <h2 class="title">Sobre nós</h2>
                    <h4 class="subtitle">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                    <a href="#" class="btn btn-primary button button-primary"
                    >Entre em contato</a
                    >
                </div>
                </div>
            </div>
        </div>

        <div id="servicos" class="block">
            <div class="container">
                <h2 class="title text-center">Nossos serviços</h2>
                
                <div class="row">
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-4">
                    <a href="#" class="destaque">
                    <div class="img-container mb-3">
                        <img src="../../assets/eletro.jpg" class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">EletroCardiograma</h5>
                    <p class="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                    </p>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-4">
                    <a href="#" class="destaque">
                    <div class="img-container mb-3">
                        <img src="../../assets/eco.jpg" class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">EcoCardiograma</h5>
                    <p class="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                    </p>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-4">
                    <a href="#" class="destaque">
                    <div class="img-container mb-3">
                        <img src="../../assets/mapa.jpg" class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Mapa</h5>
                    <p class="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                    </p>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-0 mb-4">
                    <a href="#" class="destaque">
                    <div class="img-container mb-3">
                        <img src="../../assets/holter.jpg" class="img-fluid" />
                    </div>
                    <h5 class="text-uppercase">Holter</h5>
                    <p class="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                    </p>
                    </a>
                </div>
                </div>
            </div>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .home {
        height: 365px
    }

    :root {
        --primary: #fc5185;
        --primary-dark: #f83771;
        --secondary: #8BBBD0;
        --light: #ffff;
        --medium: #cacaca;
        --dark: #a2a2a2;
    }

    html {
        font-family: "Roboto", sans-serif;
        scroll-behavior: smooth;
    }

    #servicos a.destaque {
        display: block;
        background: var(--light);
        border-radius: 5px;
        text-align: center;
        padding: 20px;
        color: #000;
        text-decoration: none;
        transition: all ease-out 0.2s;
    }

    #servicos a.destaque:hover {
        background: #fff;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
        transform: scale(1.05);
    }

    #servicos p {
        color: var(--dark);
    }

    #servicos a.destaque .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
    }

    #servicos a.destaque .img-container img {
        max-height: 160px;
    }

    #clientes a.link-cliente {
        padding: 0 15px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px var(--light);
        height: 100px;
        transition: ease-out all 0.2s;
    }

    #servicos .badge {
        font-weight: 400;
    }

    #servicos .element-item img {
        border-radius: 5px;
        transition: all ease-out 0.2s;
    }

    #servicos .element-item img:hover {
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
    }

    #servicos .button-group {
    margin-bottom: 30px;
    }

    #servicos .button-group button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
    }

    #servicos .button-group button + button {
    margin-left: 30px;
    }

    #servicos .button-group button.active {
    color: var(--primary);
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 700;
    }

    a {
    color: var(--primary);
    }

    a:hover {
    color: var(--secondary);
    }

    .title {
    text-transform: uppercase;
    }

    .subtitle {
    color: var(--medium);
    font-weight: 400;
    }

    .block {
    margin-bottom: 120px;
    }

    .button {
    text-transform: lowercase;
    font-weight: 500;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    }

    .button-primary {
    background-color: var(--primary);
    border-color: var(--primary);
    }

    .button-primary:hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
    }

    .button-primary-outline {
    border-color: var(--primary);
    color: var(--primary);
    }

    .button-primary-outline:hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
    }

  


</style>