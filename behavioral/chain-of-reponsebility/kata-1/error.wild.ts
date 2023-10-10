import { ErrorType } from './errorType';
import { IError } from './ierror';

export class ErrorWild implements IError {
    get type(): ErrorType {
        return ErrorType.WILD;
    }
    get message(): string {
        return 'This is wild error';
    }    
}