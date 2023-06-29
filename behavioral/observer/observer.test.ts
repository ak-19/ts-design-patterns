import  { EventManager } from './eventManager';
import { EmailListener } from './emailListener';

describe('When event manager makes email event', () => {
    test('email listener should get emali event and finish test', (done) => {
        const eventManager = new EventManager();
        const emailListener = new EmailListener(done);
        eventManager.subscribe('email', emailListener);
        eventManager.notify('email', 'email sent');
    });
});