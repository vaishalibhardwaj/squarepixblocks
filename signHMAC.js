var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'eloooo');
console.log('token:');
console.log(token);
//signed with default SHA256

var decoded = jwt.verify(token, 'eloooo');
console.log('--------------');
console.log('decoded.foo:'); 
console.log(decoded.foo); 
console.log('--------------');
console.log('decoded:'); 
console.log(decoded);
console.log('--------------');


jwt.verify(token, 'eloooo', function(err, decoded) {
  console.log('--------------');  
  console.log('decoded.foo:'); 
  console.log(decoded.foo); 
  console.log('--------------');  
});


decoded = jwt.decode(token, {complete: true});
console.log('decoded.header:');  
console.log(decoded.header);
console.log('decoded.payload:');  
console.log(decoded.payload);

