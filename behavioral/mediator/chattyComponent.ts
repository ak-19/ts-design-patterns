import { IComponent } from "./icomponent";
import { IMediator } from "./imediator";

export class ChattyComponent implements IComponent {
    constructor(private mediator: IMediator, private id: string, private eventReceiver: IComponent) {
        this.mediator.addComponent(this);
    }

    send(componentId: string, event: string): void {
        this.mediator.notify(this, componentId, event);
    }

    receive(event: string): void {
        console.log(`${this.id} received ${event}`);
    }

    getId(): string {
        return this.id;
    }
}