import { IObserver } from "./iobserver";
import { IPublisher } from "./ipublisher";

export class EventManager implements IPublisher {
    private eventListeners: Map<string, IObserver[]> = new Map<string, IObserver[]>();

    subscribe(eventName: string, listener: IObserver): void {
        if (!this.eventListeners.has(eventName)) this.eventListeners.set(eventName, []);
        const event = this.eventListeners.get(eventName);
        if (event) event.push(listener);
    }

    unsubscribe(eventName: string, observer: IObserver): void {
        const event = this.eventListeners.get(eventName);
        if (event) {
            const index = event.indexOf(observer);
            if (index !== -1) event.splice(index, 1);
        }
    }
    
    notify(eventName: string, data: string): void {
        const event = this.eventListeners.get(eventName);
        if (event) event.forEach(observer => observer.update(data));
    }
}