<template>
  <div class="register">
      <div class="register-modal">
        <div class="register-title">
            <h2>Registro do Laudo</h2>
        </div>
        <label for="input-cpf">CRM:</label>
                <b-input id="input-crm" placeholder="Informe seu CRM"
                type="number" min="0"></b-input>
        <br>
        <label for="input-cpf">CPF:</label>
                <b-input id="input-cpf" placeholder="Informe o CPF do paciente"
                type="number" min="0"></b-input>
        <br>
        <label for="input-data-exame">Data do Exame:</label>
                <b-input id="input-data-exame" placeholder="Informe a data do exame" type="date"></b-input>
                <br>
        
        <label for="input-laudo">Laudo:</label>
                <b-input id="input-laudo" placeholder=""
                type="number" min="0"></b-input>
                <br>
        <label for="input-pdf">PDF:</label>
                <b-input id="input-pdf" placeholder=""
                type="number" min="0"></b-input>
                <br>
        <b-button pill block variant="danger" @click="registrar_paciente()" class="btn-register">Envier laudo</b-button>

      </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>