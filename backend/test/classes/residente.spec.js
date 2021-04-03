let expect =require('chai').expect;
let Residente = require('../../classes/residente')



describe('Classe Residente', () =>{
    context('Smoke test', () =>{
        it('Residente existe no projeto', ()=>{
            expect(Residente).to.exist
        })

       
    })
})