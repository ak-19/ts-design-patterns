export interface IStateHandler {
    addState(state: string): void;
    getStateAt(steps: number): string;
}