import { Light } from "./light";

export class OnCommand {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    execute() {
        return this.light.onCommand();
    }
}
