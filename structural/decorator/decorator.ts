interface IComponent {
    operation(): string;   
}

export class ConcreteComponent implements IComponent {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

export class Decorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public operation(): string {
        return `Decorated${this.component.operation()}`;
    }
}