export class Light {
    private state: boolean = false;
    
    onCommand() {
        this.state = true;
        return "Light is on";
    }
    offCommand() {
        this.state = false;
        return "Light is off";
    }

    getState() {
        return this.state;
    }
}