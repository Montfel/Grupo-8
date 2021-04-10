const app = require('../../index');
const request = require('supertest')
const cpf = Math.floor(Math.random() * 1000);



test("Deve inserir usuario com sucesso", async (done) => {

    return request(app).post('/registro/usuario')
        .send({
                cpf: cpf,
                nome: "Test Jest",
                senha: "123456",
                confirmacaoSenha: "123456"
            
            }
        )
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })
        

})

test("Deve Listar usuarios na porta 3000", async (done) => {

    //Acessar a Url http://localhost:3000/usuarios
    return request(app).get('/usuarios')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0)
            done()
            
        })

})

test("Deve retornar o nome do usuario",  async(done) => {

    return request(app).get('/usuarios')
        .then((res) => {
            expect(res.body[1]).toHaveProperty('nome', 'Test Jest');
            done();
        })
})

test("Deve alterar Usuario com sucesso", async (done)=> {

    return request(app).put('/usuario/55')
    .send({
        nome: "Test Jest 2",
    })
    .then((res) =>{
        expect(res.status).toBe(204);
        done()
    })
})
    
test("Não deve repetir Usuario ", async(done) => {

    return request(app).post('/registro/usuario')
        .send({
                cpf: cpf,
                nome: "Test Jest",
                senha: "123456",
                confirmacaoSenha: "123456"
            }
        )
        .then((res) =>{
            expect(res.status).toBe(400);
            done()
        })
})

test("Não deve inserir Usuario sem o CPF", async (done) => {

    return request(app).post('/registro/usuario')
        .send({
                nome: "Test Jest",
                senha: "123456",
                confirmacaoSenha: "123456"
            }
        )
        .then((res) => {
            expect(res.status).toBe(400)
            done()
        })
})

test("Não deve inserir Usuario sem o Nome", async(done) => {

    const result = await request(app).post('/registro/usuario')
        .send({
                cpf: "123456",
                senha: "123456",
                confirmacaoSenha: "123456"
            
            }
        );
    expect(result.status).toBe(400);
    done();
})

test("Não deve inserir Usuario sem a Senha", async(done) => {

    return request(app).post('/registro/usuario')
        .send({
                cpf: "12345",
                nome: "Test Jest",
                confirmacaoSenha: "123456"
            }
        )
        .then((res) => {
            expect(res.status).toBe(400)
            done()
        })
})

test("Deve excluir usuario com sucesso", async(done) => {

    return request(app).delete('/pessoa/usuario/55')
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })
})
