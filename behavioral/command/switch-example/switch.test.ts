import { Light } from './light';
import { OffCommand } from './off.command';
import { OnCommand } from './oncommand';
import  { Switch } from './switch';

describe('When on command is executed on switch of the group and then off', () => {
    test('history should show "on,off"', () => {
        const switchDevice = new Switch();

        const light = new Light();

        const onCommand = new OnCommand(light);
        const offCommand = new OffCommand(light);

        switchDevice.register('on', onCommand);
        switchDevice.register('off', offCommand);

        expect(switchDevice.execute('on')).toBe('Light is on');
        expect(light.getState()).toBeTruthy();

        expect(switchDevice.execute('off')).toBe('Light is off');
        expect(light.getState()).toBeFalsy();

        expect(switchDevice.showHistory()).toBe('on,off');
    });
});