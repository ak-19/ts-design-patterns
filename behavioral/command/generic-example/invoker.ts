import { ICommand } from "./icommand";

export class Invoker {
    private commands: Map<string, ICommand> = new Map();
    public setCommand(commandName: string, command: ICommand) {
        this.commands.set(commandName, command);
    }

    public execute(commandName: string) {
        const command = this.commands.get(commandName);
        if (command) return command.execute();
    }
}