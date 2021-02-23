const {checkURL} = require( '../src/client/js/checkURL');



describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(checkURL).toBeDefined();
    })
})