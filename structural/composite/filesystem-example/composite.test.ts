import { Directory } from './directory';
import { File } from './file';

describe('File System Composite Pattern Example Test', () => {
    describe('When root directory has home, pictures and documents attached to it, together with some files', () => {
        test('root ls should return information about whole fs tree', () => {
            const root = new Directory('root');
            const home = new Directory('home');
            const pictures = new Directory('pictures');
            const documents = new Directory('documents');
            
            root.add(home);
            root.add(pictures);
            root.add(documents);
    
            const document1 = new File('document1');
            const document2 = new File('document2');
            documents.add(document1);
            documents.add(document2);
    
            const picture1 = new File('picture1');
            const picture2 = new File('picture2');
            pictures.add(picture1);
            pictures.add(picture2);
            
            expect(root.ls()).toEqual('roothomepicturespicture1picture2documentsdocument1document2');
        });        
    });
});