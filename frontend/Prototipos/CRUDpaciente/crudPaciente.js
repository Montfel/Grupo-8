var dados = []

function ApagaRegistro(id) {
    let _confirm = confirm("Deseja excluir este registro?")

    if (_confirm) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].ID == id) {
                dados.splice(i, 1)
            }
        }

        PopulaTabela()

    }
}

function EditaRegistro(id) {
    $("#modalRegistro").modal("show")

    dados.forEach(function (item) {
        if (item.ID == id) {
            $("#hdID").val(item.ID)
            $("#txtNome").val(item.Nome)
            $("#txtCPF").val(item.CPF)
            $("#txtDtNascimento").val(item.DtNascimento.substr(6, 4) + "-" + item.DtNascimento.substr(3, 2) + "-" + item.DtNascimento.substr(0, 2))
            $("#txtCor").val(item.Cor)
            $("#txtGenero").val(item.Genero)
        }
    })

}

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

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
                <td><button type="button" class="btn btn-primary" onclick="javascript:EditaRegistro(${item.ID});"><i class="fas fa-edit"></i></button></td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:ApagaRegistro(${item.ID});"><i class="fas fa-trash"></i></button></td>
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

    $("#btnSalvar").click(function () {
        //Evento click do botão salvar

        let _id = $("#hdID").val()
        let Nome = $("#txtNome").val()
        let CPF = $("#txtCPF").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
        let Cor = $("#txtCor").val()
        let Genero = $("#txtGenero").val()

        if (!_id || _id == "0") {
            let registro = {}
            registro.Nome = Nome
            registro.CPF = CPF
            registro.DtNascimento = DtNascimento
            registro.Cor = Cor
            registro.Genero = Genero

            registro.ID = dados.length + 1
            dados.push(registro)
        } else {
            dados.forEach(function (item) {
                if (item.ID == _id) {
                    item.Nome = Nome
                    item.CPF = CPF
                    item.DtNascimento = DtNascimento
                    item.Cor = Cor
                    item.Genero = Genero
                }
            })
        }

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        // Limpeza dos campos
        $("#hdID").val("0")
        $("#txtNome").val("")
        $("#txtCPF").val("")
        $("#txtDtNascimento").val("")
        $("#txtCor").val("")
        $("#txtGenero").val("")

        PopulaTabela()

    })

})
