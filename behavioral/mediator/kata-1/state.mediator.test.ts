import { IMediator } from "./imediator";
import { StateMediator } from "./stateMediator";
import { State } from "./state";
import { IState } from "./istate";

describe('When state1 is changed', () => {
    test('should update other 2 states with that value', () => {
        const state1: IState = new State();
        const state2: IState = new State();
        const state3: IState = new State();
        const mediator: IMediator = new StateMediator(state1, state2, state3);

        state1.setState(11);

        expect(state1.getState()).toBe(11);
        expect(state2.getState()).toBe(11);
        expect(state3.getState()).toBe(11);
    });
});

describe('When state2 is changed', () => {
    test('should update other 2 states with that value', () => {
        const state1: IState = new State();
        const state2: IState = new State();
        const state3: IState = new State();
        const mediator: IMediator = new StateMediator(state1, state2, state3);

        state2.setState(22);

        expect(state1.getState()).toBe(22);
        expect(state2.getState()).toBe(22);
        expect(state3.getState()).toBe(22);
    });
});