import { IRemote } from "./abstraction.iremote";
import { IDevice } from "./implementor.idevice";

export class Remote implements IRemote {
    protected device: IDevice;

    constructor(device: IDevice) {
        this.device = device;
    }

    power(): void {
        this.device.isEnabled() ? this.device.disable() : this.device.enable();
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    channelDown(): void {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    channelUp(): void {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

export class AdvancedRemote extends Remote {
    mute(): void {
        this.device.setVolume(0);
    }
}
