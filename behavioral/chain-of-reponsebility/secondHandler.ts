import { IHandler } from "./ihandler";

export class SecondHandler implements IHandler {
    private next: IHandler;

    handle(request: string): string {
        if (request.includes('second')) return 'handled by second handler';
        if (this.next) return this.next.handle(request);
        return '';
    }

    setNext(handler: IHandler): void {
        this.next = handler;
    }
}