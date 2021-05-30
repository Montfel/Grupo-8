const app = require('../../app');
const request = require('supertest')

const cpf = Math.floor(Math.random() * 1000);
const crm = Math.floor(Math.random() * 1000);

const cpf1 = Math.floor(Math.random() * 1000);
const crm1= Math.floor(Math.random() * 1000);

const cpf2 = Math.floor(Math.random() * 1000);
const crm2 = Math.floor(Math.random() * 1000);




test("Deve inserir Medico residente com sucesso", async (done) => {

    return await request(app).post('/registro/medico')
        .send({
                cpf: cpf,
                nome: "Medico Residente",
                senha: "123456",
                confirmacaoSenha: "123456",
                tipo_medico: "residente",
                crm: crm,                
                ano_residencia_inicio: '2029-12-21',                            
            }
        )
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })    
})

test("Deve inserir Medico professor com sucesso", async (done) => {

    return await request(app).post('/registro/medico')
        .send({
                cpf: cpf1,
                nome: "Medico Professor",
                senha: "123456",
                confirmacaoSenha: "123456",
                tipo_medico: "professor",
                crm: crm1,                
                titulacao: 'Professor',                            
            }
        )
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })    
})

test("Deve inserir Medico profissional com sucesso", async (done) => {

    return await request(app).post('/registro/medico')
        .send({
                cpf: cpf2,
                nome: "Medico Profissional",
                senha: "123456",
                confirmacaoSenha: "123456",
                tipo_medico: "profissional",
                crm: crm2,                                    
            }
        )
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })    
})

test("Deve Listar medicos Profissionais", async (done) => {
   
    return await request(app).get('/medicos/profissional')
        .then((res) => {
            expect(res.status).toBe(200);
            //expect(res.body.length).toBeGreaterThan(0)
            done()            
        })

})

test("Deve Listar medicos Professores", async (done) => {
   
    return await request(app).get('/medicos/professor')
        .then((res) => {
            expect(res.status).toBe(200);
            //expect(res.body.length).toBeGreaterThan(0)
            done()            
        })

})  

test("Deve Listar medicos Residentes", async (done) => {
   
    return await request(app).get('/medicos/residente')
        .then((res) => {
            expect(res.status).toBe(200);
            //expect(res.body.length).toBeGreaterThan(0)
            done()            
        })

})  

test("Deve excluir medico com sucesso", async(done) => {

    return await request(app).delete('/pessoa/usuario/184')
        .then((res) =>{
            expect(res.status).toBe(204);
            done()
        })
})