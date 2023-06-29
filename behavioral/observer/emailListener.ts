import  { IObserver } from './iobserver';

export class EmailListener implements IObserver {
    private  finshedCallback: Function;
    constructor(finshedCallback: Function) {
        this.finshedCallback = finshedCallback;
    }

    update(data: string): void {
        this.finshedCallback()
    }
}
