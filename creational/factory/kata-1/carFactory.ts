import { CarColor } from "./carColor";
import { CarType } from "./carType";
import { CarVariation } from "./carVariation";
import { ICar } from "./icar";

import { Audi } from "./audi";
import { BMW } from "./bmw";
import { Mercedes } from "./mercedes";

const typeMap = {
    [CarType.Mercedes]: Mercedes,
    [CarType.BMW]: BMW,
    [CarType.Audi]: Audi
}

export class CarFactory {
    make(type: CarType, carVariation: CarVariation, carColor: CarColor): ICar | undefined{
        if (typeMap[type]) return new typeMap[type](carVariation, carColor);
        return  undefined;
    }
}