import  { IComponent } from './icomponent';  
import { IMediator } from './imediator';

export class Mediator implements IMediator {
    private components: IComponent[] = [];

    constructor() {
        this.components = [];
    }

    addComponent(component: IComponent) {
        this.components.push(component);
    }

    notify(sender: IComponent, componentId: string, event: string) {
        this.components.forEach((component) => {
            if (component.getId() === componentId) component.receive(event);            
        });
    }
}