import { IComponent } from "./icomponent";

export class Leaf implements IComponent {
    public operation(): string {
        return 'Leaf';
    }
}