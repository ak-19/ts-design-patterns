import { IState } from "./istate";

export interface IMediator {
    notify(sender: IState, state: number): void;
}