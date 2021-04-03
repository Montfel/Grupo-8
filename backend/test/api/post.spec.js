// let chai = require("chai");
// let chaiHttp = require("chai-http");
// const app =  require("../../index");

// //Assertion Style
// chai.should();

// chai.use(chaiHttp);

// describe("POST /registro/usuario", () => {
//     it("É possivél criar um novo Usuario", (done) => {

//         const Usuario = {
                      
//                 cpf: "123456782901",
//                 nome: "Paulo11",
//                 senha: "12345611",
//                 confirmacaoSenha: "12345611"
//             }

//         chai.request(app)                
//             .post("/registro/usuario")
//             .send(Usuario)
//             .end((err, response) => {
//                 response.should.have.status(204);
//             done();
//             });
//     });

// })
