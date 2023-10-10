import { ILogger } from "./Ilogger";
import { ErrorWild } from "./error.wild";
import { IError } from "./ierror";

export class WildLogger {
    private next: ILogger | undefined;
    nextLogger(logger: ILogger): void {
        this.next = logger;
    }
    handle(error: IError): string  {
        if(error instanceof ErrorWild) return error.message;
        if (this.next == null) throw new Error('No logger can handle this error');
        return this.next.handle(error);
    }
}