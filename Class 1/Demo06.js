var util= require('util');

var txt = 'Congrats %s on your %dth bday';

var result= util.format(txt,'John',20);

console.log(result);