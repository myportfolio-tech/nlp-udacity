const {callAPI} = require( '../src/client/js/callAPI');



describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(callAPI).toBeDefined();
    })
})