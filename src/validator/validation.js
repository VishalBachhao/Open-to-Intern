const mongoose = require('mongoose');

// ---------------------------------validation for id----------------------------------------//

const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
};
// ---------------------------------validation for email------------------------------------------//
const isValidEmail = function (value)   {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) { return true }
    else return false
}

//----------------------------------validation for name and fullName (* only aplphabet)-----------------------------------

// const validChar = function (value) {
//     if (/^[a-zA-Z ]{2,30}$/.test(value)) {
//         return true
//     } else {
//         return false
//     }
// }
// -----------------------------------valiadtion for number-------------------------------------------/^[a-zA-Z ]{2,30}$/
// =--------------------------------no /, /space/+/only 10 digit----------------------------------------------------

const validanumber = function (value) {
    if (/^\d{10}$/.test(value)) {
        return true
    } else {
        return false
    }
}
// -------------------------------validation for url-(https/ //)------------------------------------------------------------
const validurl= function (value){
    if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(value)) {
        return true
    }else {
        return false
    }
}
const validChar = function (value) {
    if (typeof value !== "string" || value.trim() == "") { return false }
    else {
        var isValid = /[/^[a-zA-Z ]{2,30}$/;
        // console.log(value.trim());
        return isValid.test(value.trim());
    }
}




module.exports.isValidObjectId = isValidObjectId
module.exports.isValidEmail = isValidEmail
module.exports.validChar = validChar
module.exports.validanumber = validanumber
module.exports.validurl = validurl
