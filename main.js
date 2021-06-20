'use strict';
const fs = require('fs');
const USERHOME = process.env.HOME;
const CommandExecutorFactory = require('./commands/commandExecutorFactory');
const ParkingLotService = require('./service/parkingLotService');
const Command = require('./models/command');
const path = require("path");

const PARENTPATH = path.resolve(__dirname);;
async function main() {
    console.log("WELCOME!");
    let path = `${PARENTPATH}/input`;
    let data = await readFile(path);
    let commandExecutorFactory = new CommandExecutorFactory(new ParkingLotService());
    let i = 0;
    console.log(typeof data);
    while(i < data.length) {
        let command = new Command(data[i]);
        // console.log(command);
        let executor = commandExecutorFactory.getExecutor(command);
        // console.log("executor:", executor);
        if (executor.validate()) {
            executor.execute(command);
        } else {
            throw new Error('Incorrect command');
        }
        i++;
    }
}

function readFile(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf-8', function read(err, data) {
			if (err) {
				console.log(err);
				reject(err);
			} else {
                // console.log('data:', data);
				data = data.trim();
                data = data.split(/\r?\n/);
                // console.log("len:", data.length);
				resolve(data);
			}
		});
	});
}


main();