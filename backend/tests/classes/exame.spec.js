import {expect} from 'chai';
import Exame from '../../classes/exame';

describe('Classe Exame', () =>{
    context('Smoke test', () =>{
        it('Exame existe no projeto', ()=>{
            expect(Exame).to.exist
        })
    })
})