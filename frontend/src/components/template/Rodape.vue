<template>
    <footer class="footer">
        <div class="conteudo">
                <div id="conteudo-1">
                    <h5 class="texto">Termos de uso e política de privacidade</h5>
                    <p class="texto">Copyright © 2021 Clínica Cardiológica UniCardio. Todos os direitos reservados.</p>
                </div>
                <div id="conteudo-2">
                    <h5 class="texto">Fale Conosco</h5>
                    <p class="texto">
                        <i class="fa fa-phone fa-lg" id="phone"></i>
                        <i class="fa fa-whatsapp fa-lg" id="wpp"></i>
                        <i class="fa fa-at fa-lg" id="at"></i>
                        <i class="fa fa-instagram fa-lg" id="insta"></i>
                    </p>
                </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Rodape",

}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .footer {
        width: 100%;
        height: 90px;

        background: #79b0c9;
    }

    .conteudo {
        display: flex;
        justify-content: left;
        align-items: center;

        padding-top: 20px;
    }

    #conteudo-1 {
        margin-left: 150px;
    }

    #conteudo-2 {
        margin-left: 100px;
    }
  

    #wpp, #insta, #at {
        margin-left: 8px;
    }
    
    .texto {
        color: #fff;
    }

</style>