const app = require('../../app');
const request = require('supertest')

const cpf = Math.floor(Math.random() * 1000);



test("Deve inserir Paciente com sucesso", async (done) => {

    return await request(app).post('/registro/paciente')
        .send({
                cpf: cpf,
                nome: "Paciente",
                senha: "123456",
                confirmacaoSenha: "123456",
                cor: "azul",
                sexo: "estranho",
                data_nascimento: "2010-10-12"                            
            }
        )
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })    
})


test.skip("Deve Listar Pacientes", async (done) => {
   
    //TODO não tem metodo para retornar paciente
})
