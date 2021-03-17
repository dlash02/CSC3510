const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
chai.use(chaiHttp);
//const app = require('../app')
 const inventory = require('../express2')
//const Dog = require("./models/dog")
 describe("GET /inventory", () => {
  it("should return status 200", async () => {
   let res = await chai
       .request(inventory)
       .get('/inventory');
   expect(res.status).to.equal(200)
   //console.log( "FLAGc..............." );
   //console.log( res.body );
  })
  it("get a single inventory record for hammers", async () => {
   chai.request('http://localhost:8885')
       .get('/inventory/2')
       .end(function(err, res) {
        console.log("test2 flagb->");
        console.log(res.body);
        expect(res).to.have.status(200);
        //expect(res.body).to.have.property('items');
        expect(res.body).to.have.property('price');
        let n = res.body.name;
        expect(res.body.name).to.eql( 'saw');
       });
    });
 });
