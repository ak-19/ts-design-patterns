import { ICommand } from "./icommand";
import { Receiver } from "./receiver";

export class SayHelloCommand implements ICommand {
    private receiver: Receiver;
    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute() {
        return this.receiver.helloCommand();
    }
}
