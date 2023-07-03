import { IComponent } from "./icomponent";
import { IMediator } from "./imediator";

export class TestEventReceiver implements IComponent {
    // private event: 
    constructor(private mediator: IMediator, private testCallback: Function) {
        this.mediator.addComponent(this);
    }

    receive(event: string) {
        if(event === 'test') this.testCallback('received test event'); 
    }

    send(componentId: string, event: string): void {
        throw new Error("Method not implemented.");
    }

    getId(): string {
        return 'TestEventReceiver';
    }
}