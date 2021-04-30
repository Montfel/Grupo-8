const url = "https://cid10-api.herokuapp.com/cid10"
const axios = require('axios')
const fs = require('fs')

const salvarDados = () => {
    let cont = 0
    axios.get(url).then(res => {
        let dados = res.data.filter(function(item) {
            if(cont < 10) {
                cont++;
                return { codigo: item.codigo, nome: item.nome}
            }
    
        })
        salvarJson(JSON.stringify(dados))
    })
}

const salvarJson = (dados) => {
    fs.writeFile("cid.json", dados, function(err) {
        if (err) {
            // console.log(err);
        }
    });
}

salvarDados();