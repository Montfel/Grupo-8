let expect =require('chai').expect;
let Pessoa = require('../../classes/pessoa')



describe('Classe Pessoa', () =>{
    context('Smoke test', () =>{
        it('Pessoa existe no projeto', ()=>{
            expect(Pessoa).to.exist
        })

       
    })
})