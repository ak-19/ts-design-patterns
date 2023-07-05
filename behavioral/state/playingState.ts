import { IPlayer } from "./iplayer";
import { IState } from "./istate";
import { LockedState } from "./lockedState";
import { ReadyState } from "./readyState";


export class PlayingState implements IState {
    private player: IPlayer;

    constructor(player: IPlayer) {
        this.player = player;
    }

    lock() {
        const lockedState = new LockedState(this.player);
        lockedState.setPlaying(true);
        this.player.changeState(lockedState);
    }

    setPlaying(value: boolean) {    
    }

    play() {
    }

    stop(): void {
        this.player.changeState(new ReadyState(this.player));
    }

    isPlaying(): boolean {
        return true;
    }

    isLocked(): boolean {
        return false;
    }

    unlock(): void {

    }
}