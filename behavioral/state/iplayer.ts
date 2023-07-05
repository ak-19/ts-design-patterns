import { IState } from "./istate";

export interface IPlayer {
    lock(): void;
    unlock(): void;
    play(): void;
    next(): void;
    previous(): void;
    stop(): void;
    isPlaying(): boolean;
    changeState(state: IState): void;
    setPlaylist(playlist: string[]): void;
    getPlaylist(): string[];
    setCurrentItem(songNumber: number): void;
    getCurrentItem(): number;
}
