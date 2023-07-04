// implement memento pattern with typescript and jest tests

import { IStateHandler } from './istateHandler';
import { Originator } from './originator';
import { StateHandler } from './stateHandler';

describe('When saving states after updataindg state', () => {
    test('Originator should be able restore previous states', () => {
        const caretaker: IStateHandler = new StateHandler();
        const originator = new Originator(caretaker);

        originator.state = 'state1';
        originator.saveState();

        originator.state = 'state2';
        originator.saveState();

        originator.state = 'state3';
        originator.saveState();

        originator.state = 'state4';
        originator.restoreState(1);
        expect(originator.state).toEqual('state3');

        originator.restoreState(3);
        expect(originator.state).toEqual('state1');
    });
} );


        
    