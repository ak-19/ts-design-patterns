import { IPlayer } from "./iplayer";
import { IState } from "./istate";
import { ReadyState } from "./readyState";

export class AudioPlayer implements IPlayer {
    private state: IState;
    private playlist: string[];
    private currentSong: number;

    constructor() {
        this.state = new ReadyState(this);
        this.currentSong = 0;
    }

    changeState(state: IState) {
        this.state = state;
    }

    lock() {
        this.state.lock();
    }

    unlock() {
        this.state.unlock();
    }

    play() {
        if (this.state.isLocked()) return;
        this.state.play();
    }

    next() {
        if (this.state.isLocked()) return;
        const index = this.getCurrentItem();
        if (index < this.playlist.length - 1) {
            this.setCurrentItem(index + 1);
        }
    }

    previous() {
        if (this.state.isLocked()) return;
        const index = this.getCurrentItem();
        if (index > 0) {
            this.setCurrentItem(index - 1);
        }   
    }

    isPlaying(): boolean {
        return this.state.isPlaying();
    }

    stop() {
        if (this.state.isLocked()) return;
        this.state.stop();
    }

    setPlaylist(playlist: string[]) {
        if (this.state.isLocked()) return;
        this.playlist = playlist;
    }

    setCurrentItem(songNumber: number) {
        if (this.state.isLocked()) return;
        this.currentSong = songNumber;
    }

    getCurrentItem(): number {
        return this.currentSong;
    }

    getPlaylist(): string[] {
        return this.playlist;
    }
}