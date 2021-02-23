const {checkURL} = require( '../src/client/js/checkURL');




test("Testing checkUrl exists function", () => {
    expect(checkURL).toBeDefined();
});


test("URL value is not url", () => {
    const checkurl = checkURL('a b c 9');
    expect(checkurl).toBe(false);
});


test("URL value is URL", () => {
    const checkurl = checkURL('https://www.archives.gov/founding-docs/declaration-transcript');
    expect(checkurl).toBe(true);
});

