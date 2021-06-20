class CommandExecutor {
    constructor(parkingLotService) {
        this.parkingLotService = parkingLotService;
    }

    validate(command) {
        return true;
    }

    execute(command) {
        
    }
}

module.exports = CommandExecutor;