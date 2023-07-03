import { IComponent } from "./icomponent";

export interface IMediator {
    addComponent(component: IComponent): void;
    notify(sender: IComponent, componentId: string, event: string): void;
}