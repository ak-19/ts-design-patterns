import { SubjectCacheProxy } from "./subjectCacheProxy";

describe('When proxy is called', () => {
    test('should return data from real subject it is hidding', () => {
        const proxy = new SubjectCacheProxy();
        expect(proxy.getData()).toBe('This is original subject data: Test 001');        
    });
});