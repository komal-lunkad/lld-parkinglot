const CommandExecutor = require("./commandExecutor");
const Car = require("../models/car");

class ParkingLotCommandExecutor extends CommandExecutor {
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
            let car = new Car(command.params[0], command.params[1]);
            let slotNumber = this.parkingLotService.park(car);
            console.log('car parked at ', slotNumber);
        } catch (ex) {
            throw ex;
        }
    }
}

ParkingLotCommandExecutor.COMMAND_NAME = 'park';

module.exports = ParkingLotCommandExecutor;