let expect =require('chai').expect;
let Exame = require('../../classes/exame')



describe('Classe Exame', () =>{
    context('Smoke test', () =>{
        it('Exame existe no projeto', ()=>{
            expect(Exame).to.exist
        })
    })
})