import { Light } from "./light";

export class OffCommand {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    execute() {
        return this.light.offCommand();
    }
}