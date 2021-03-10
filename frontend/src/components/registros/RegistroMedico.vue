<template>
    <div class="register">
        <div class="register-modal">
            <div class="register-title">
                <h2> Registro do Médico </h2>
            </div>
            <label for="input-nome">Nome:</label>
            <b-input v-model="medico.nome" id="input-nome" placeholder="Informe seu nome completo"></b-input>
            <br>

            <label for="input-cpf">CPF:</label>
            <b-input v-model="medico.cpf" id="input-cpf" placeholder="Informe seu CPF"></b-input>
            <br>

            <label for="input-crm">CRM:</label>
            <b-input v-model="medico.crm" id="input-crm" placeholder="Informe seu CRM"></b-input>
            <br>

            <label for="input-tipo">Tipo de Médico:</label>
            <b-form-select v-model="medico.tipo" id="input-tipo" :options="tipos"></b-form-select>
            <br><br>

            <label v-if="medico.tipo === 'Professor'" for="input-titulacao">Titulação:</label>
            <b-input v-if="medico.tipo === 'Professor'" id="input-titulacao" placeholder="Informe sua titulação"></b-input>
            <br v-if="medico.tipo === 'Professor'">
            
            <label v-if="medico.tipo === 'Residente'" for="input-residencia">Anos de residência:</label>
            <b-input v-if="medico.tipo === 'Residente'" id="input-residencia" placeholder="Anos de residência"
            type="number" min="0" max="4" ></b-input>
            <br v-if="medico.tipo === 'Residente'">

            <label for="input-senha">Senha:</label>
            <b-input v-model="medico.senha" id="input-senha" placeholder="Insira sua senha" type="password"></b-input>
            <br>

            <label for="input-confirma-senha">Confirme sua senha:</label>
            <b-input v-model="medico.confirmacaoSenha" id="input-confirma-senha" placeholder="Insira sua senha novamente" type="password"></b-input>
            <br>

            <b-button pill block variant="danger" @click="registrar_medico()" class="btn-register">Registrar</b-button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError} from '@/global.js'
import axios from 'axios'

export default {
    name: 'Registro Médico',
    data: function() {
        return {
            medico: {},
            tipo: null,
            tipos: [
                {value: 'Profissional', text: 'Profissional'},
                {value: 'Professor', text: 'Professor'},
                {value: 'Residente', text: 'Residente'},
            ]
        }
    },
    methods: {
        registrar_medico() {
            const url = `${baseApiUrl}/medico`
            axios.post(url, this.medico)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },

        reset() {
            this.medico = {}
        }
    }

}
</script>

<style>
    .register {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .register-modal {
        width: 350px;
        padding: 30px; 
        box-shadow: 1px 5px 30px rgb(195, 195, 195);
    }

    .register-title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-register {
        margin-top: 20px;
    }
</style>