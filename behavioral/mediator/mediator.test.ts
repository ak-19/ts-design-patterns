import { ChattyComponent } from "./chattyComponent";
import { IComponent } from "./icomponent";
import { IMediator } from "./imediator";
import { Mediator } from "./mediator";
import { TestEventReceiver } from "./testEventReceiver";

describe('When chatty component sends test event with TestEventReceiver as target component', () => {
    test('TestEventReceiver should receive event and return "received test event"', (done) => {
        const mediator: IMediator = new Mediator();
        const testEventReceiverComponent: IComponent = new TestEventReceiver(mediator, (r: string) => {
            expect(r).toBe('received test event');
            done();
        });
        const chattayComponent = new ChattyComponent(mediator, 'chatty', testEventReceiverComponent);
        chattayComponent.send('TestEventReceiver', 'test');
    });
});