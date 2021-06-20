class Command {
    constructor(input) {
        console.log(input);
        input = input.trim().split(' ');
        // console.log('after input:', input);
        if (!input) {
            throw new Error('Please check the input command. Probably its wrong!');
        }
        this.commandName = input[0];
        input.shift();
        this.params = input;
    }
}
module.exports = Command;