<template>
  <div class="register">
      <div class="register-modal" id="exame">
        <div class="register-title">
            <h2>Cadastro de Exame</h2>
        </div>
        <br>
        <label for="input-cpf">CPF:</label>
        <b-input id="input-cpf" placeholder="Informe o CPF do paciente"
        type="number" min="0"></b-input>
        <br>

        <label for="input-cid">Hipótese(Base no CID):</label>
        <b-form-select id="input-cid" :option="cid"></b-form-select>
        <br><br>

        <label for="input-data-exame">Data do Exame:</label>
        <b-input id="input-data-exame" placeholder="Informe a data do exame" type="date"></b-input>
        <br>

        <label for="input-tipo">Tipo Solicitante:</label>
        <b-form-select id="input-tipo-solicitante" :options="tipos"></b-form-select>
        <br><br>

        <label for="input-tipo">Tipo de Exame:</label>
        <b-form-select id="input-tipo-exame" :options="tiposExame"></b-form-select>
        <br><br>

        <label for="input-recomendacoes">Recomendações:</label>
        <b-form-textarea
            id="input-recomendacoes"
            rows="3"
            no-resize
        ></b-form-textarea>

        <b-button pill block variant="danger" @click="registrar_paciente()" class="btn-register">Confirmar Exame</b-button>

      </div>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return{
            tipos:[
                {value: 'profissional', text: 'Profissional'},
                {value: 'professor', text: 'Professor'},
            ],
            tiposExame:[
                {value: 2, text: 'EletroCardiograma'},
                {value: 1, text: 'EcoCardiograma'},
                {value: 3, text: 'MAPA'},
                {value: 4, text: 'Holter'},
            ],
            cid: []
        }
    },
    methods: {
        async getCid() {
            const url = 'https://cid10-api.herokuapp.com/cid10'
            axios.get(url).then(res => {
                this.cid = res.data.map(d => {
                    const s = d.nome
                    return { value: 1, text: s}
                })
            })

        }

    },
    mounted() {
        // this.getCid()
    }
}
</script>

<style>
    #exame {
        width: 600px;
    }
</style>