import { AdvancedRemote, Remote } from "./abstraction.remote";
import { TV } from "./implementor.tv";
import { Radio } from "./implementor.radio";

describe('Bridge Design Pattern tests', () => {
    describe('When remote is used with TV', () => {
        test('should be able to power on tv, volume up, get volume, channel change and power off ', () => {
            const tv = new TV();
            const remote = new Remote(tv);
            remote.power();
            expect(tv.isEnabled()).toBe(true);
            remote.volumeUp();
            expect(tv.getVolume()).toBe(10);
            remote.volumeDown();
            expect(tv.getVolume()).toBe(0);
            remote.channelUp();
            expect(tv.getChannel()).toBe(1);
            remote.channelDown();
            expect(tv.getChannel()).toBe(0);
            remote.power();
            expect(tv.isEnabled()).toBe(false);
        });
    });

    describe('When advanced remote is used with radio', () => {
        test('should be able to power on radio, volume up, get volume, channel change and power off ', () => {
            const radio = new Radio();
            const advancedRemote = new AdvancedRemote(radio);
            advancedRemote.power();
            expect(radio.isEnabled()).toBe(true);
            advancedRemote.volumeUp();
            expect(radio.getVolume()).toBe(10);
            advancedRemote.volumeDown();
            expect(radio.getVolume()).toBe(0);
            advancedRemote.channelUp();
            expect(radio.getChannel()).toBe(1);
            advancedRemote.channelDown();
            expect(radio.getChannel()).toBe(0);
            advancedRemote.mute();
            expect(radio.getVolume()).toBe(0);
            advancedRemote.power();
            expect(radio.isEnabled()).toBe(false);
        });
    });
});




