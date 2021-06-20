class ParkingLotService {
    constructor() {
        this.parkingLot = undefined;
        this.parkingStrategy = undefined;
    }

    createParkingLot(parkingLot, parkingStrategy) {
        console.log("dsfhgf");
        if (this.parkingLot) {
            throw new Error("Parking lot already exists");
        }

        this.parkingLot = parkingLot;
        this.parkingStrategy = parkingStrategy;
        console.log("capacity:", parkingLot.capacity);
        for (let i = 1; i <= parkingLot.capacity; i++) {
            this.parkingStrategy.addSlot(i);
        }
    }
    validateParkingLot() {
        if (!this.parkingLot) {
            throw new Error('Parking lot is null');
        }
    }

    park(car) {
        this.validateParkingLot();
        let slotNumber = this.parkingStrategy.getNextSlot();
        this.parkingLot.park(car, slotNumber);
        this.parkingStrategy.removeSlot(slotNumber);
        return slotNumber;
    }

    makeSlotFree(slotNumber) {
        this.validateParkingLot();
        this.parkingLot.makeSlotFree(slotNumber);
        this.parkingStrategy.addSlot(slotNumber);
        return slotNumber;
    }

    getOccupiedSlots() {
        this.validateParkingLot();
        let occupiedSlots = [];
        let slots = this.parkingLot.slots;
        for (let i = 1; i <= this.parkingLot.capacity; i++) {
            if (slots.has(i)) {
                if (!slots.get(i).isSlotFree()) {
                    occupiedSlots.push(slots.get(i));
                }
            }
        }
        return occupiedSlots;
    }

    getSlotsForColor(color) {
        let occupiedSlots = this.getOccupiedSlots();
        let res = occupiedSlots.filter(s => {
             return s.parkedCar.color === color;
        });
        return res;
    }
}

module.exports = ParkingLotService;