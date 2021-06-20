'use strict';
const CreateParkingLot = require('./createParkingLotCommandExecutor');
const ParkCommandExecutor = require('./parkCommandExecutor');
const LeaveCommandExecutor = require('./leaveCommandExecutor');
const StatusCommandExecutor = require('./statusCommandExecutor');
const RegistrationNoForColorCommandExecutor = require("./registrationNoForColorCommandExecutor");
class CommandExecutorFactory {
    constructor(parkingLotService) {
        this.commands = new Map();
        this.commands.set(CreateParkingLot.COMMAND_NAME, new CreateParkingLot(parkingLotService));
        this.commands.set(ParkCommandExecutor.COMMAND_NAME, new ParkCommandExecutor(parkingLotService));
        this.commands.set(LeaveCommandExecutor.COMMAND_NAME, new LeaveCommandExecutor(parkingLotService));
        this.commands.set(StatusCommandExecutor.COMMAND_NAME, new StatusCommandExecutor(parkingLotService));
        this.commands.set(RegistrationNoForColorCommandExecutor.COMMAND_NAME, new RegistrationNoForColorCommandExecutor(parkingLotService));
    }

    getExecutor(command) {
        if (!this.commands.has(command.commandName)) {
            throw new Error('Invalid command');
        }

        return this.commands.get(command.commandName);
    }
}

module.exports = CommandExecutorFactory;