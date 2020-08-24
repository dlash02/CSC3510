// ProxyQuire Support: add 2 requires
const proxyquire = require('proxyquire');
const sinon = require('sinon');
// ProxyQuire STUB DB
const db = require('sqlite');

const c = require('chai');
const should = c.should();

// getting this right is tricky make sure
// reservations.js is in the right dir and path is exact
const Reservation = require('../../../lib/schema/reservation');
//
// ProxyQuire Support: comment out reservations
//const reservations = require('../../../lib/reservations');

describe('Reservations Library', function() {
// ProxyQuire Support: create the reservations testing suite - This silences the debugger
// ------------ start -----
    const debugStub = function() {
        return sinon.stub();
    }
    let reservations;
    before( function() {
        reservations = proxyquire('../../../lib/reservations', {
            debug: debugStub
        })

    });
// ------------ end -----
    context( 'Validate', function() {
        it('Should pass a vaid reservation with no optional fields', function() {
            const res = new Reservation({

                date: "2020/07/10",
                time: '06:02 AM',
                party: 4,
                name: 'Jack Scott',
                email: 'user@user.com'
            });
            return reservations.validate( res ).
                then(actual => actual.should.deep.equal( res ));
        });
        it('Should fail an invaid reservation with a bad email', function() {
            const res = new Reservation({

                date: "2020/07/10",
                time: '06:02 AM',
                name: 'Jack Scott',
                party: 4,
                email: 'user'
            });
            return reservations.validate( res )
                .catch( error => error.should.be.an('error').and.not.null);
        });
        context('Create', function() {
           let dbStub;
           before( function() {
               dbStub = sinon.stub(db, 'run').resolves({
                   stmt: {
                      lastID: 1349
                   }

               });
               reservations = proxyquire('../../../lib/reservations', {
                   debug: debugStub,
                   sqlite: dbStub
               });
           });
           after( function() {
               dbStub.restore();
           });
           it ( 'should return the created reservation ID', function( done ){
               const reservation = new Reservation({
                date: "2020/07/10",
                time: '06:02 AM',
                name: 'Jack2 Scott2',
                party: 4,
                email: 'user@user.com'
               });
               reservations.create( reservation).then(lastID => {
                   lastID.should.deep.equal( 1349);
                   done();
               }) .catch( error => done(error));
             });
    });
});
});
