import {handleSubmit} from '../src/client/js/formHandler';
import {handleClick} from '../src/client/js/handleClick';
import {callAPI} from '../src/client/js/callAPI';
import {checkURL} from  '../src/client/js/checkURL';
import {cleanData} from '../src/client/js/cleanData';



describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
})


// describe("Testing the submit functionality", () => {
//     test("Testing the handleSubmit() function", () => {
//         expect(handleClick).toBeDefined();
//     })
// })