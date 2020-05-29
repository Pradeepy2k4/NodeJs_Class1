const url= require('url');

var adr="http://localhost:8080/default.html?year=2020&month=january";

var q= url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);