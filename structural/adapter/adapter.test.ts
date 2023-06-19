import { A } from "./a";
import { B } from "./b";
import { BToAAdapter } from "./b2a.adapter";
import { Client } from "./client";

describe('When type B instance is given to b to a adapter', () => {
    test('Adapter instance should be used as A instance', () => {
        const b = new B();
        const adapter = new BToAAdapter(b);
        const a = new A();
        const clientA = new Client(a);
        const clientB = new Client(adapter);

        expect(clientA.callMethodA()).toBe('methodA');
        expect(clientB.callMethodA()).toBe('methodB');
        
        expect(a.methodA()).toBe('methodA');
        expect(adapter.methodA()).toBe('methodB');
    });
});