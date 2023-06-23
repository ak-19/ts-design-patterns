import { IComponent } from "./icomponent";

export class Composite implements IComponent {
    protected children: IComponent[] = [];

    public add(component: IComponent): void {
        this.children.push(component);
    }

    public remove(component: IComponent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    public operation(): string {
        const results: string[] = [];

        for (const child of this.children) results.push(child.operation());

        return `Branch(${results.join('+')})`;
    }
}
