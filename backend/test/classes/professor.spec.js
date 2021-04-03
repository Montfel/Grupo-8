let expect =require('chai').expect;
let Professor = require('../../classes/professor')



describe('Classe Professor', () =>{
    context('Smoke test', () =>{
        it('Professor existe no projeto', ()=>{
            expect(Professor).to.exist
        })

       
    })
})