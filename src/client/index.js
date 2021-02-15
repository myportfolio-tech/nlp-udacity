require("@babel/register")

import {callAPI} from './js/callAPI'
import {checkURL} from './js/checkURL'
import {cleanData} from './js/cleanData'
import {handleClick} from  './js/handleClick'


export{
    handleClick,
    cleanData,
    checkURL,
    callAPI
}