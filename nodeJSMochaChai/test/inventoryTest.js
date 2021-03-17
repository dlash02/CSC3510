const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
chai.use(chaiHttp);
//const app = require('../app')
 const inventory = require('../express1.js')
//const Dog = require("./models/dog")
 describe("GET /inventory", () => {
  it("should return status 200", async () => {
   let res = await chai
       .request(inventory)
       .get('/inventory');
   expect(res.status).to.equal(200)
   //console.log( "FLAGA" );
   //console.log( res.body );
  })
  it("get inventory should contain hammers", async () => {
   chai.request('http://localhost:8888')
       .get('/inventory')
       .end(function(err, res) {
        //console.log("flagb->");
        //console.log(res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('items');
        expect(res.body.items).to.have.property('saw');
       });
    });
 });
