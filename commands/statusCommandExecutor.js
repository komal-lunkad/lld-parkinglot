const CommandExecutor = require("./commandExecutor");
const Car = require("../models/car");

class StatusCommandExecutor extends CommandExecutor {
    constructor(parkingLotService) {
        super(parkingLotService);
    }

    validate(command) {
        super.validate(command);
        return true;
    }

    execute(command) {
        super.execute(command);
        try {
            // let slot = parseInt(command.params[0]);
            let occupiedSlots = this.parkingLotService.getOccupiedSlots();
            // console.log('car freed from slot ', slotNumber);
            if (!occupiedSlots.length) {
                console.log('Parking lot is free....');
                return;
            }
            console.log("parking lot details as follows:");

            for (let i = 0; i < occupiedSlots.length; i ++) {
                let s = occupiedSlots[i];
                // console.log(s);
                console.log("Slot no: ", s.slotNumber, " booked by car with no ", s.parkedCar.registration_no, " and color ", s.parkedCar.color);
            }
        } catch (ex) {
            throw ex;
        }
    }
}

StatusCommandExecutor.COMMAND_NAME = 'status';

module.exports = StatusCommandExecutor;