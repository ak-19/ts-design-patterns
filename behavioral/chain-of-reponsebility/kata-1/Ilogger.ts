import { IError } from "./ierror";

export interface ILogger {
    nextLogger(logger: ILogger): void;
    handle(error: IError): string;
}