import { IStateHandler } from "./istateHandler";
import { Memento } from "./memento";

export class StateHandler implements IStateHandler {
    private mementos: Memento[] = [];

    addMemento(memento: Memento) {
        this.mementos.push(memento);
    }

    addState(state: string) {
        this.addMemento(new Memento(state));
    }

    getStateAt(steps: number = 0) {
        return this.getMemento(steps).state;
    }

    getMemento(steps: number) {
        const index = this.mementos.length - steps;
        return this.mementos[index];
    }
}