class Slot {
    constructor(slotNumber) {
        this.slotNumber = slotNumber;
        this.parkedCar = undefined;
    }

    isSlotFree() {
        return !this.parkedCar ? true : false;
    }

    assignCar(car) {
        this.parkedCar = car;
    }

    unassignCar() {
        this.parkedCar = undefined;
    }
}

module.exports = Slot;