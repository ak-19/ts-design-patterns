import { CarColor } from "./carColor";
import { CarType } from "./carType";
import { CarVariation } from "./carVariation";

export interface ICar {
    type: CarType;
    variation: CarVariation;
    color: CarColor;
}