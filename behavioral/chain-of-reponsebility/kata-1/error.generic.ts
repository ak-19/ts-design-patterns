import { ErrorType } from './errorType';
import { IError } from './ierror';

export class ErrorGeneric implements IError {
    get type(): ErrorType {
        return ErrorType.ERROR;
    }
    get message(): string {
        return 'This is generic error';
    }    
}