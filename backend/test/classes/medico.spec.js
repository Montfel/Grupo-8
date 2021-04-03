let expect =require('chai').expect;
let Medico = require('../../classes/medico')



describe('Classe Medico', () =>{
    context('Smoke test', () =>{
        it('Medico existe no projeto', ()=>{
            expect(Medico).to.exist
        })

       
    })
})