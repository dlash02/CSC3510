'use strict';

const newMember = [
  84236,
  'Luis',
  'Rubio',
  '25624 Main St.',
  'Pawtucket',
  'Rhode Island',
  '02906',
];

class label {
  constructor(options) {
    this.number = options.number;
  }
  addFullName() {
    this.fullName = newMember[1] + ' ' + newMember[2];
  }
  addStreet() {
    this.street = newMember[3];
  }
  addCSZ() {
    this.csz = newMember[4] + ' ' + newMember[5] + ', ' + newMember[6];
  }
  logLabel() {
    const that = this;
    return function() {
      console.log('\n',that.fullName,'\n',that.street,'\n',that.csz);
    }
  }
}

const currentLabel = new label({
  number: newMember[0],
});

currentLabel.addFullName();
currentLabel.addStreet();
currentLabel.addCSZ();

window.addEventListener('load', currentLabel.logLabel());