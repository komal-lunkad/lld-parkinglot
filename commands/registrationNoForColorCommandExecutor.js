const CommandExecutor = require("./commandExecutor");
const Car = require("../models/car");

class RegistrationNoForColorCommandExecutor extends CommandExecutor {
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
            let color = command.params[0];
            let occupiedSlots = this.parkingLotService.getSlotsForColor(color);
            // console.log('car freed from slot ', slotNumber);
            if (!occupiedSlots.length) {
                console.log('No parking slots for this color ....');
                return;
            }
            console.log("parking lot details as follows:");

            for (let i = 0; i < occupiedSlots.length; i ++) {
                let s = occupiedSlots[i];
                // console.log(s);
                console.log("Slot no: ", s.slotNumber, " and  car registration no ", s.parkedCar.registration_no);
            }
        } catch (ex) {
            throw ex;
        }
    }
}

RegistrationNoForColorCommandExecutor.COMMAND_NAME = 'registration_numbers_for_cars_with_colour';

module.exports = RegistrationNoForColorCommandExecutor;