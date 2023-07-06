import { HtmlDocumentCreator } from './htmlDocumentCreator';
import { TextDocumentCreator } from './textDocumentCreator';

describe('When HtmlDocumentCreator is created and document contant is set to "this is test document"', () => {
    test('should  create document that has html embedded with "this is test document"', () => {
        const htmlDocumentCreator = new HtmlDocumentCreator();
        htmlDocumentCreator.setDocument('this is test document');
        expect(htmlDocumentCreator.createDocument()).toEqual('<html><head>This is Html document</head><body><p>this is test document</p></body></html>');
    })   
});        
    
describe('When plain text creator is created and document content is set up to "this is test document content"', () => {
    test('should create text document with "this is test document content" text embedded in it', () => {
        const plainTextDocumentCreator = new TextDocumentCreator();
        plainTextDocumentCreator.setDocument('this is test document content');
        expect(plainTextDocumentCreator.createDocument()).toEqual('This is Text document header\nthis is test document content');  
    });
});