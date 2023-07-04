export class Memento {
    constructor(private currState: string) {
    }

    get state() {
        return this.currState;
    }
}

