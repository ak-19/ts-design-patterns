import IBike from "./ibike";

class HondaBike implements IBike {
    drive() {
        return 'Driving a Honda Bike';
    }
}

class YamahaBike implements IBike {
    drive() {
        return 'Driving a Yamaha Bike';
    }
}

class CrossBike implements IBike {
    drive() {
        return 'Driving a Cross Bike';
    }
}

export default class BikeFactory {
    static getBike(bike: string): IBike | undefined {
        if (bike) {
            if (bike.includes('Honda')) return new HondaBike();
            if (bike.includes('Yamaha')) return new YamahaBike();
            if (bike.includes('Cross')) return new CrossBike();
        } else {
            return undefined;
        }
    }
}
