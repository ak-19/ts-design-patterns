import { IMediator } from "./imediator";
import { IState } from "./istate";

export class StateMediator implements IMediator {
    constructor(private state1: IState, private state2: IState, private state3: IState) { 
        state1.setMediator(this);
        state2.setMediator(this);
        state3.setMediator(this);
    }

    notify(sender: IState, state: number): void {
        this.state1.updateState(state);
        this.state2.updateState(state);
        this.state3.updateState(state);
    }
}