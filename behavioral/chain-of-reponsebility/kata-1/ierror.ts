import { ErrorType } from "./errorType";

export interface IError {
    type: ErrorType;
    message: string;
} 