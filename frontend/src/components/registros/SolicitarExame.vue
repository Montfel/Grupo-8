<template>
  <div class="register">
      <div class="register-modal">
        <div class="register-title">
            <h2>Cadastro de Exame</h2>
        </div>
        <label for="input-cpf">CPF:</label>
                <b-input id="input-cpf" placeholder="Informe seu CPF do paciente"
                type="number" min="0"></b-input>
        <br>
        <label for="input-cpf">Hipótese(Base no CID):</label>
                <b-input id="input-cid" placeholder=""
                type="number" min="0"></b-input>
        <br>
        <label for="input-data-exame">Data do Exame:</label>
                <b-input id="input-data-exame" placeholder="Informe a data do exame" type="date"></b-input>
                <br>
        <label for="input-tipo">Tipo Solicitante:</label>
                <b-form-select id="input-tipo-solicitante" :options="tipos"></b-form-select>
                <br><br>
        <label for="input-tipo">Tipo de Exame:</label>
                <b-form-select id="input-tipo-exame" :options="tiposExame"></b-form-select>
                <br>
        <label for="input-recomendacoes">Recomendações:</label>
                <b-input id="input-recomendation" placeholder=""
                type="number" min="0"></b-input>
                <br>
        <b-button pill block variant="danger" @click="registrar_paciente()" class="btn-register">Confirmar Exame</b-button>

      </div>  
  </div>
</template>

<script>
export default {
    data:function(){
        return{

    
    tipos:[
        {value: 'profissional', text: 'Profissional'},
        {value: 'professor', text: 'Professor'},
    ],
    tiposExame:[
        {value: 'eletrocardiograma', text: 'EletroCardiograma'},
        {value: 'ecocardiograma', text: 'EcoCardiograma'},
        {value: 'mapa', text: 'MAPA'},
        {value: 'holter', text: 'Holter'},
    ]}
    
}
}
</script>

<style>

</style>