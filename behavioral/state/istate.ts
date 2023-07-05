export interface IState {
    lock(): void;
    play(): void;
    stop(): void;
    lock(): void;
    unlock(): void;
    isPlaying(): boolean;
    setPlaying(value: boolean): void;
    isLocked(): boolean;
}