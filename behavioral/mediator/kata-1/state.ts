import { IMediator } from "./imediator";
import { IState } from "./istate";

export class State implements IState {
    private state: number = 0;
    private mediator: IMediator;   

    setState(state: number): void {
        this,this.mediator.notify(this, state);
        this.state = state;
    }

    updateState(state: number): void {
        this.state = state;
    }

    getState(): number {
        return this.state;
    }

    setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}