import { IObserver } from "./iobserver";

export interface IPublisher {
    subscribe(eventName: string, listener: IObserver): void;
    unsubscribe(eventName: string, observer: IObserver): void;
    notify(eventName: string, data: string): void;
}