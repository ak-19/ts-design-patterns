import { ILogger } from "./Ilogger";
import { ErrorGeneric } from "./error.generic";
import { IError } from "./ierror";

export class GenericLogger {
    private next: ILogger | undefined;
    nextLogger(logger: ILogger): void {
        this.next = logger;
    }
    handle(error: IError): string  {
        if(error instanceof ErrorGeneric) return error.message;
        if (this.next == null) throw new Error('No logger can handle this error');
        return this.next.handle(error);
    }
}