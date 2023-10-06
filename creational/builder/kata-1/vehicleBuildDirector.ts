import { IVehicleBuilder } from "./ivehicleBuilder";

export class VehicleBuildDirector {
    constructor(private builder: IVehicleBuilder) { }
    build() {
        this.builder.build();
        return this
    };

    getVehicle(): IVehicleBuilder {
        return this.builder
    }
}