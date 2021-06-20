'use strict';
const ParkingLotService = require('../service/parkingLotService');
const CommandExecutor = require('./commandExecutor');
const ParkingLot = require("../models/parkingLot");
const NaturalOrderingStrategy = require('../models/parking/strategy/naturalStrategy');

class CreateParkingLotCommandExecutor extends CommandExecutor {
    // static COMMAND_NAME = 

    constructor(parkingLotService) {
        super(parkingLotService);
    }

    validate(command) {
        super.validate(command);
        return true;
    }

    execute(command) {
        let that = this;
        console.log("hi....");
        super.execute(command);
        let cap = parseInt(command.params[0]);
        console.log("cap:", cap);
        let pl = new ParkingLot(cap);
        that.parkingLotService.createParkingLot(pl, new NaturalOrderingStrategy());
        console.log('Created parking lot');
    }
}
CreateParkingLotCommandExecutor.COMMAND_NAME = 'create_parking_lot';
module.exports = CreateParkingLotCommandExecutor;