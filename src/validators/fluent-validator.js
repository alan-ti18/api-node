'use strict'

let errors = [];

function ValidationContract() {
   errors = [];
}

ValidationContract.prototype.isRequired = (value, msg) => {
   if (!value || value.length <= 0){
      errors.push({message: msg});
   }
}

ValidationContract.prototype.hasMinLen = (value, min, msg) => {
   if (!value || value.length < min){
      errors.push({message: msg});
   }
}

ValidationContract.prototype.hasMaxLen = (value, max, msg) => {
   if (!value || value.length > max){
      errors.push({message: msg});
   }
}

ValidationContract.prototype.isFixedLen = (value, len, msg) => {
   if (value.length != len){
      errors.push({message: msg});
   }
}

ValidationContract.prototype.isEmail = (value, msg) => {
   var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
   if (!reg.test(value)){
      errors.push({message: msg});
   }
}

ValidationContract.prototype.errors = () => {
   return errors;
}

ValidationContract.prototype.clear = () => {
   errors = [];
}

ValidationContract.prototype.isValid = () => {
   return errors.length == 0;
}

module.exports = ValidationContract;
