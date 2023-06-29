import { IHandler } from './ihandler';

export class ThirdHandler implements IHandler {
    private next: IHandler;
    setNext(handler: IHandler): void{
        this.next = handler;
    }

    handle(request: string): string {
        if (request.includes('third')) return 'handled by third handler';
        if (this.next) return this.next.handle(request);
        return '';
    }
}