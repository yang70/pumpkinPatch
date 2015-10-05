
var expect = require('chai').expect;
var PumpkinPatch = require('../lib/pumpkinPatch');

describe("The Pumpkin Patch", function(){
  it('should have a name', function(){
    var farm = new PumpkinPatch('The Great Pumpkin Patch', 100);


    expect(farm.name).to.equal('The Great Pumpkin Patch');
  });

  it('should report correct number of pumpkins', function(){
    var farm = new PumpkinPatch('The Great Puumpkin Patch', 100);
    expect(farm.pumpkinsLeft()).to.equal(100);
  });
})
