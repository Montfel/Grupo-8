<template>
    <div class="register">
        <div class="register-modal">
            <div class="register-title">
                <h2>Registro do Paciente</h2>
            </div>

            <label for="input-nome">Nome:</label>
            <b-input v-model="paciente.nome" id="input-nome" placeholder="Informe seu nome completo"></b-input>
            <br>

            <label for="input-cpf">CPF:</label>
            <b-input v-model="paciente.cpf" id="input-cpf" placeholder="Informe seu CPF"
            type="number" min="0"></b-input>
            <br>

            <label for="input-cor">Cor:</label>
            <b-input v-model="paciente.cor" id="input-cor" placeholder="Informe sua cor"></b-input>
            <br>

            <label for="input-sexo">Sexo:</label>
            <b-input v-model="paciente.sexo" id="input-sexo" placeholder="Informe seu sexo"></b-input>
            <br>

            <label for="input-data-nascimento">Data de Nascimento:</label>
            <b-input v-model="paciente.data_nascimento" id="input-data-nascimento" placeholder="Informe sua data de nascimento" type="date"></b-input>
            <br>

            <label for="input-senha">Senha:</label>
            <b-input v-model="paciente.senha" id="input-senha" placeholder="Insira sua senha" type="password"></b-input>
            <br>

            <label for="input-confirma-senha">Confirme sua senha:</label>
            <b-input v-model="paciente.confirmacaoSenha" id="input-confirma-senha" placeholder="Insira sua senha novamente" type="password"></b-input>
            <br>

            <b-button pill block variant="danger" @click="registrar_paciente()" class="btn-register">Registrar</b-button>

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
            paciente: {},
            tipo_registro: 'paciente'
        }
    },
    methods: {
        registrar_paciente() {
            // this.paciente.tipo_registro = this.tipo_registro

            const url = `${baseApiUrl}/registro/${this.tipo_registro}`
            axios.post(url, this.paciente)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },

        reset() {
            this.paciente = {}
        }
    }
}
</script>

<style>

</style>