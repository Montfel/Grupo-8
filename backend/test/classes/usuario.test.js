const app = require('../../app');
const request = require('supertest')
const cpf = Math.floor(Math.random() * 1000);



test("Deve inserir usuario com sucesso", async () => {

    const result = await request(app).post('/registro/usuario')
        .send({
                cpf: cpf,
                nome: "Test Jest",
                senha: "123456",
                confirmacaoSenha: "123456"            
            }
        )
        
    expect(result.status).toBe(204);            
})


test("Deve Listar usuarios", async (done) => {
   
    return await request(app).get('/usuarios')
        .then((res) => {
            expect(res.status).toBe(200);
            //expect(res.body.length).toBeGreaterThan(0)
            done()            
        })

})  
    
test("Deve alterar Usuario com sucesso", async ()=> {

    return await request(app).put(`/usuario/198`)
    .send({
        nome: "Test Jest 2",
    })
    .then((res) =>{
        expect(res.status).toBe(204);        
    })
})

test("Não deve inserir Usuario sem o CPF", async () => {

    return request(app).post('/registro/usuario')
        .send({
                nome: "Test Jest",
                senha: "123456",
                confirmacaoSenha: "123456"
            }
        )
        .then((res) => {
            expect(res.status).toBe(400)            
        })
})

test("Não deve inserir Usuario sem o Nome", async() => {

    const result = await request(app).post('/registro/usuario')
        .send({
                cpf: "123456",
                senha: "123456",
                confirmacaoSenha: "123456"
            
            }
        );
    expect(result.status).toBe(400);   
})

test("Não deve inserir Usuario sem a Senha", async() => {

    return request(app).post('/registro/usuario')
        .send({
                cpf: "12345",
                nome: "Test Jest",
                confirmacaoSenha: "123456"
            }
        )
        .then((res) => {
            expect(res.status).toBe(400)            
        })
})


test("Deve excluir usuario com sucesso", async() => {

    return request(app).delete('/pessoa/usuario/198')
        .then((res) =>{
            expect(res.status).toBe(204);                
        })
})