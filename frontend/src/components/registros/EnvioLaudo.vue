<template>
  <div class="register">
      <div class="register-modal">
        <div class="register-title">
            <h2>Registro do Laudo</h2>
        </div>
        <label for="input-cpf">CRM:</label>
        <b-input id="input-crm" placeholder="Informe seu CRM"
        type="number" min="0" v-model="laudo.crm"></b-input>

        <br>

        <label for="input-cpf">CPF:</label>
        <b-input id="input-cpf" placeholder="Informe o CPF do paciente"
        type="number" min="0" v-model="laudo.cpf"></b-input>

        <br>

        <label for="input-data-exame">Data do Exame:</label>
        <b-input id="input-data-exame" placeholder="Informe a data do exame" type="date"
        v-model="laudo.data_realizada"></b-input>

        <br>
        
        <label for="input-laudo">Laudo:</label>
        <b-form-textarea
            id="input-text-area"
            placeholder="Informe o laudo do paciente..."
            rows="3"
            max-rows="6"
            v-model="laudo.laudo"
        >
        </b-form-textarea>

        <br>

        <label for="input-pdf">PDF:</label>
        <b-form-file
            placeholder="Insira o PDF aqui..."
            accept=".pdf"
            v-model="laudo.imagem"
        >
        </b-form-file>

        <br>

        <b-button pill block variant="danger" @click="registrar_laudo()" class="btn-register">Enviar laudo</b-button>

      </div>  
  </div>
</template>

<script>
import { baseApiUrl, showError} from '@/global.js'
import axios from 'axios'

export default {
    name: "Registro Laudo",
    data: () => {
        return {
            laudo: {}
        }
    },
    methods: {
        registrar_laudo() {
            let formData = new FormData();

            for (const key in this.laudo) {
                formData.append(key, this.laudo[key])
            }

            const url = `${baseApiUrl}/laudo`
            axios.post(url, formData)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },

        reset() {
            this.laudo = {}
        }
    }
}
</script>

<style>

</style>