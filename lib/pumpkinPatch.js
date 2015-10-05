
var PumpkinPatch = function(name, count) {
  this.name = name;
  this.count = count;
}

PumpkinPatch.prototype.pumpkinsLeft = function() {
  return this.count;
}

module.exports = PumpkinPatch;
