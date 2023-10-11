import { IMediator } from "./imediator";

export interface IState {
    setState(state: number): void;
    getState(): number;
    setMediator(mediator: IMediator): void;
    updateState(state: number): void;
}