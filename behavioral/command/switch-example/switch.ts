import { ICommand } from "../generic-example/icommand";

export class Switch {
    private history: string[] = [];
    private commands: Map<string, ICommand> = new Map();
    
    public register(commandName: string, command: ICommand) {
        this.commands.set(commandName, command);
    }

    public execute(commandName: string) {
        const command = this.commands.get(commandName);
        if (command) {
            this.history.push(commandName);
            return command.execute();
        }
        return null;        
    }

    public showHistory() {
        const result: string[] = [];
        for (let index = 0; index < this.history.length; index++) {
            result.push(this.history[index]);            
        }

        return result.join(',');
    }    
}
