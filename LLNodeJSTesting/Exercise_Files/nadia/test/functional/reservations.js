const chai = require('chai');
const chaiHttp = require('chai-http');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const logger = require('morgan');
chai.use(chaiHttp);

describe('/reservations', function() {
    let dbStub;
    let loggerStub;
    let debugStub;
    let app;
    before( function() {
        deStub = {
            run: function() {
                return Promise.resolve({
                    stmt: {
                        lastID: 1348
                    }
                });
            }
        }
        dbStub['@global'] = true;
        loggerStub = sinon.
    })

});
