import { DocumentCreator } from './documentCreator';

export class HtmlDocumentCreator extends DocumentCreator {
    createHeader(): string {
        return '<html><head>This is Html document</head><body>';
    }
    createBody(): string {
        return `<p>${this.document}</p>`;
    }
    createFooter(): string {
        return '</body></html>';
    }
}