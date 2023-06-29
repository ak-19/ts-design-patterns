export interface IHandler {
    handle(request: string): string;
    setNext(handler: IHandler): void;
}