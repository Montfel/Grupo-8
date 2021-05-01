var dados = []

function PopulaTabela() {
    if(Array.isArray(dados)) {

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //Template String
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.CPF}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Cor}</td>
                <td>${item.Genero}</td>
            </tr>`)
        })
    }
}

$(function () {
    //Executa ao carregar da tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

})
