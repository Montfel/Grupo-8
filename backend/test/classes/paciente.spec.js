let expect =require('chai').expect;
let Paciente = require('../../classes/paciente')



describe('Classe Paciente', () =>{
    context('Smoke test', () =>{
        it('Paciente existe no projeto', ()=>{
            expect(Paciente).to.exist
        })

       
    })
})