import { DocumentCreator } from "./documentCreator";

export class TextDocumentCreator extends DocumentCreator {
    createHeader(): string {
        return 'This is Text document header\n';
    }
    createBody(): string {
        return this.document;
    }
    createFooter(): string {
        return '';
    }
}   
