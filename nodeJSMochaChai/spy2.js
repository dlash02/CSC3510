var user = {
    setName: function(name){
       this.name = name;
    }
}

var sinon = require('sinon');
var spy = sinon.spy();
//Create a spy for the setName function
var setNameSpy = sinon.spy(user, 'setName');

//Now, any time we call the function, the spy logs information about it
user.setName('Darth Vader');

console.log(`name:${user.name}`);
//Which we can see by looking at the spy object
console.log(setNameSpy.callCount); //output: 1

//Important final step - remove the spy
setNameSpy.restore();