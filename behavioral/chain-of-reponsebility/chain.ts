import { IHandler } from './ihandler';

export class Chain implements IHandler {
    
    private next: IHandler;

    public setNext(handler: IHandler): void {
        this.next  = handler;
    }

    public handle(request: string): string {
        if (this.next) return this.next.handle(request);
        return '';
    }
}
