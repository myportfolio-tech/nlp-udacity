import 'regenerator-runtime/runtime';

const {callAPI} = require( '../src/client/js/callAPI');
const {cleanData} = require( '../src/client/js/cleanData');




test("Testing callAPI() exists", () => {
    expect(callAPI).toBeDefined();
});


test("Testing Async callAPI() Call", () => {
    callAPI('https://www.archives.gov/founding-docs/declaration-transcript').then(callData => {
        expect(callData).toBe('This is the return');
    });
    
});


