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

class Label {
  constructor(options) {
    this.number = options.number;
  }
  addFullName() {
    this.fullName = newMember[1] + ' ' + newMember[2];
    return this;
  }
  addStreet() {
    this.street = newMember[3];
    return this;
  }
  addCSZ() {
    this.csz = newMember[4] + ' ' + newMember[5] + ', ' + newMember[6];
    return this;
  }
  logLabel() {
    console.log('\n',this.fullName,'\n',this.street,'\n',this.csz);
    // const that = this;
    // const log = function() {
    //   console.log('\n',that.fullName,'\n',that.street,'\n',that.csz);
    // }
  }
}

const currentLabel = new Label({
  number: newMember[0],
});

currentLabel
  .addFullName()
  .addStreet()
  .addCSZ();

window.addEventListener('load', currentLabel.logLabel.call(currentLabel));