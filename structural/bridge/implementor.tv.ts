import { IDevice } from "./implementor.idevice";

export class TV implements IDevice {
    private enabled: boolean = false;
    private volume: number = 0;
    private channel: number = 0;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = percent;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }
}
