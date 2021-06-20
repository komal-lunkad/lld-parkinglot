'use strict';
const Slot = require('./slot');

class ParkingLot {
    constructor(capacity) {
        this.capacity = capacity;
        this.slots = new Map();
    }

    getSlot(slotNumber) {
        if (!this.slots.has(slotNumber)) {
            this.slots.set(slotNumber, new Slot(slotNumber));
        }
        return this.slots.get(slotNumber);
    }

    park(car, slotNumber) {
        let slot = this.getSlot(slotNumber);
        if (!slot.isSlotFree()) {
            throw new Error('slot is already occupied');
        }
        slot.assignCar(car);
        return slot;
    }

    makeSlotFree(slotNumber) {
        let slot = this.getSlot(slotNumber);
        slot.unassignCar();
        return slot;
    }
}

module.exports = ParkingLot;