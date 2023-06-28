import { Invoker } from "./invoker";
import { Receiver } from "./receiver";

import { SayHelloCommand } from "./sayHelloCommand";
import { SayGoodByeCommand } from "./sayGoodByeCommand";

describe('When sayHello and sayGoodBye commands are executed on invoker', () => {
    test('they should return "Receiver: saying hello" and "Receiver: saying goodbye"', () => {
        const invoker = new Invoker();
        const receiver = new Receiver();
        
        const sayHelloCommand = new SayHelloCommand(receiver);
        const sayGoodbyeCommand = new SayGoodByeCommand(receiver);

        invoker.setCommand('sayHello', sayHelloCommand);
        invoker.setCommand('sayGoodBye', sayGoodbyeCommand);

        expect(invoker.execute('sayHello')).toBe('Receiver: saying hello');
        expect(invoker.execute('sayGoodBye')).toBe('Receiver: saying goodbye');
    });
});