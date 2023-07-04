import { IStateHandler } from "./istateHandler";

export class Originator {
    private currState: string;

    constructor(private careTaker: IStateHandler) {
        this.currState = '';
    }

    set state(state: string) {
        this.currState = state;
    }

    get state() {
        return this.currState;
    }

    saveState() {
        this.careTaker.addState(this.currState);
    }

    restoreState(steps: number) {
        this.currState = this.careTaker.getStateAt(steps);
    }
}