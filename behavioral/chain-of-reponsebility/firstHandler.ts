import { IHandler } from "./ihandler";

export class FirstHandler implements IHandler {
    private next: IHandler;

    handle(request: string): string {
        if (request.includes('first')) return 'handled by first handler';
        if (this.next) return this.next.handle(request);
        return '';
    }

    setNext(handler: IHandler): void {
        this.next = handler;
    }
}