import { IPlayer } from "./iplayer";
import { IState } from "./istate";
import { PlayingState } from "./playingState";
import { ReadyState } from "./readyState";

export class LockedState implements IState {
    private player: IPlayer;
    private playing: boolean = false;

    constructor(player: IPlayer) {
        this.player = player;
    }

    setPlaying(value: boolean) {
        this.playing = value;
    }

    lock() {
    }

    play() { }

    stop(): void { }

    isPlaying(): boolean {
        return this.playing;
    }

    isLocked(): boolean {
        return true;
    }

    unlock(): void {
        if (this.playing) {
            this.player.changeState(new PlayingState(this.player));
        } else {
            this.player.changeState(new ReadyState(this.player));
        }        
    }
}