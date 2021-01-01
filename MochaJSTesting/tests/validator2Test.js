const chai = require('chai')
const expect = chai.expect

const v = require('../js/validator2')

describe("validator2 getGrade()", () => {
    it("should return true A", ()=> {
        expect(v.getGrade(90)).to.equal("A")
    })
    it("should return true B", ()=> {
        expect(v.getGrade(80)).to.equal("B")
    })
    it("should return true C", ()=> {
        expect(v.getGrade(70)).to.equal("C")
    })
    it("should return true D", ()=> {
        expect(v.getGrade(60)).to.equal("D")
    })
    it("should return true F", ()=> {
        expect(v.getGrade(59)).to.equal("F")
    })
    it("should return null", ()=> {
        expect(v.getGrade(-1)).to.null;
    })
    it("should return null big number", ()=> {
        expect(v.getGrade(101)).to.null;
    })
})
