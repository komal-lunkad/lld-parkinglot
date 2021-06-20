const CommandExecutor = require("./commandExecutor");
const Car = require("../models/car");

class LeaveCommandExecutor extends CommandExecutor {
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
            let slot = parseInt(command.params[0]);
            let slotNumber = this.parkingLotService.makeSlotFree(slot);
            console.log('car freed from slot ', slotNumber);
        } catch (ex) {
            throw ex;
        }
    }
}

LeaveCommandExecutor.COMMAND_NAME = 'leave';

module.exports = LeaveCommandExecutor;