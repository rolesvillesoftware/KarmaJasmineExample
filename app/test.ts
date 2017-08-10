export class TestClass {
    /**
     * Gets the name for the class
     */
    public getName(): string {
        return this.name;
    }
    public setName(name: string): TestClass {
        this.name = name;
        return this;
    }
    constructor (private name: string) {}
}