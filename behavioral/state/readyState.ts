import { IPlayer } from "./iplayer";
import { IState } from "./istate";
import { LockedState } from "./lockedState";
import { PlayingState } from "./playingState";

export class ReadyState implements IState {
    private player: IPlayer;

    constructor(player: IPlayer) {
        this.player = player;
    }

    lock() {
        this.player.changeState(new LockedState(this.player));
    }

    play() {
        this.player.changeState(new PlayingState(this.player));
    }

    setPlaying(value: boolean): void {        
    }

    stop(): void { }

    isPlaying(): boolean {
        return false;
    }

    isLocked(): boolean {
        return false;
    }

    unlock(): void { }
}