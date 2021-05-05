<template>
  <div class="register">
      <div class="register-modal" id="exame">
        <div class="register-title">
            <h2>Cadastro de Exame</h2>
        </div>
        <br>
        <label for="input-cpf">CPF:</label>
        <b-input id="input-cpf" placeholder="Informe o CPF do paciente"
        type="number" min="0" v-model="exame.cpf"></b-input>
        <br>

        <label for="input-cid">Hipótese(Base no CID):</label>
        <b-form-select id="input-cid" :options="cid" v-model="exame.hipotese"></b-form-select>
        <br><br>

        <label for="input-data-exame">Data do Exame:</label>
        <b-input id="input-data-exame" placeholder="Informe a data do exame" type="date"
            v-model="exame.data"></b-input>
        <br>

        <label for="input-tipo">Tipo Solicitante:</label>
        <b-form-select id="input-tipo-solicitante" :options="tipos"
            v-model="exame.tipoMedico"></b-form-select>
        <br><br>

        <label for="input-tipo">Tipo de Exame:</label>
        <b-form-select id="input-tipo-exame" :options="tiposExame" v-model="exame.tipoExame"></b-form-select>
        <br><br>

        <label for="input-recomendacoes">Recomendações:</label>
        <b-form-textarea
            id="input-recomendacoes"
            rows="3"
            no-resize
            v-model="exame.recomendacoes"
        ></b-form-textarea>

        <b-button pill block variant="danger" @click="salvarExame()" 
            class="btn-register">Confirmar Exame</b-button>

      </div>  
  </div>
</template>

<script>
import { baseApiUrl, showError} from '@/global.js'
import axios from 'axios'
import cidJSON from '../../assets/cid/cid.json'

export default {
    data:function(){
        return{
            exame: {},

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
        salvarExame() {
           const url = `${baseApiUrl}/exame`;

           axios.post(url, this.exame)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },

        async getCid() {
            this.cid = cidJSON.map(data => {
                return { value: data.codigo, text: data.nome}
            })

        },

        reset() {
            this.exame = {};
        }

    },
    mounted() {
        this.getCid()
    }
}
</script>

<style>
    #exame {
        width: 600px;
    }
</style>