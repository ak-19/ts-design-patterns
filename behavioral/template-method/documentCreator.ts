export abstract class DocumentCreator {
    protected document: string = '';
    setDocument(document: string): void {
        this.document = document;
    }
    createDocument(): string {
        return this.createHeader() + this.createBody() + this.createFooter();
    }
    abstract createHeader(): string;
    abstract createBody(): string;
    abstract createFooter(): string;
}

