const c = require("chai");
const  should  = c.should();
const Reservation = require("../../../../lib/schema/reservation");
describe( "Reservation Schema", function() {
    it( "should return a valid ISO_8601 date", function() {
       const d = "2020/08/20" ;
       const t = "06:02 AM";
       const x = Reservation.combineDateTime( d, t );
       console.log( `x=${x}`);
       Reservation.combineDateTime( d, t ).should.equal("2020-08-20T06:02:00.000Z");
    });
    it ( "should return null on bad date and time",
       function() {
           const d = "2020//20";
          const t = "06:02 AM";
          should.not.exist( Reservation.combineDateTime( d, t ));
       });
    context('validator', function() {
        it( 'should pass a valid reservation with not optional fields',
           function( done ){
                const reserv = new Reservation( {
                    date: '2020/08/20',
                    time: '06:03 AM',
                    party: 4,
                    name: 'Family',
                    email: 'user@user.com'
               });
               reserv.validator( function( error, value ) {
                   value.should.deep.equal( reserv );
                   done(error);
            });
        });
        it('shoud fail bad email reservations',
           function( done ){
                const reserv = new Reservation( {
                    date: '2020/08/20',
                    time: '06:03 AM',
                    party: 4,
                    name: 'Family',
                    email: 'blah'
               });
               reserv.validator(
                   function(error) {
                      error.should.be.an('error').and.not.be.null;
                      done();
                   });
            });
        });
});
