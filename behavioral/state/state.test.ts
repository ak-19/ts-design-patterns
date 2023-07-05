import { IPlayer } from "./iplayer";
import { AudioPlayer } from "./audioPlayer";

let player: IPlayer;

beforeEach(() => {
    player = new AudioPlayer();
    player.setPlaylist(['song1', 'song2', 'song3']);
});

describe('When create audio player with playlist', () => {
    test('should not have any problems starting play', () => {
        player.play();
        expect(player.isPlaying()).toBeTruthy();
    });
});

describe('When audio player is playing and is locked', () => {
    test('should still be playing', () => {
        player.play();
        expect(player.isPlaying()).toBeTruthy();
        player.lock();
        expect(player.isPlaying()).toBeTruthy();
    });
});

describe('When audio player is playing and is on first song, after next commnad', () => {
    test('should be in second song', () => {
        player.play();
        expect(player.isPlaying()).toBeTruthy();
        expect(player.getCurrentItem()).toBe(0);
        player.next();
        expect(player.getCurrentItem()).toBe(1);
    });
});

describe('When audio player is playing, it is on first song and is locked and after next command', () => {
    test('should be still playing first song', () => {
        player.play();
        expect(player.isPlaying()).toBeTruthy();
        player.lock();
        expect(player.getCurrentItem()).toBe(0);
        player.next();
        expect(player.isPlaying()).toBeTruthy();
        expect(player.getCurrentItem()).toBe(0);
    });
});
