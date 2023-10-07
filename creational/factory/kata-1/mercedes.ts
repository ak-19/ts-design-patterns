import { CarColor } from "./carColor";
import { CarType } from "./carType";
import { CarVariation } from "./carVariation";
import { ICar } from "./icar";

export class Mercedes implements ICar {
    constructor(public variation: CarVariation, public color: CarColor) { }
    get type(): CarType {
        return CarType.Mercedes;
    }
}
