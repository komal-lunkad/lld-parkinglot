const ParkingStrategy = require('./parkingStrategy');

class NaturalStrategy extends ParkingStrategy {
    constructor() {
        super();
        this.slotArr = [];
    }
}

NaturalStrategy.prototype.addSlot = function (slotNumber) {
    // super.addSlot(slotNumber);
    this.slotArr.push(slotNumber);
    this.slotArr.sort((a,b) =>{ 
        return a-b
    });
}

NaturalStrategy.prototype.removeSlot = function (slotNumber) {
    // super.removeSlot(slotNumber);
    let index = this.slotArr.indexOf(slotNumber);
    if (index === -1) {
        throw new Error('Incorrect slot number');
    }
    this.slotArr.splice(index, 1);
}

NaturalStrategy.prototype.getNextSlot = function() {
    // super.getNextSlot();
    if (this.slotArr.length === 0) {
        throw new Error("no slot available");
    }

    return this.slotArr[0];
}

module.exports = NaturalStrategy;