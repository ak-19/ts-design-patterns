export class ReverseNamer {
    private readonly names: string[] = ['Joe', 'John', 'Jane', 'Jill'];
    private counter = -1;
    getName() {
        this.counter++;
        if (this.counter == this.names.length) this.counter = 0;
        return this.names[this.counter].split('').reverse().join('');
    }
}