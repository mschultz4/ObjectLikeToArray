# ObjectLikeToArray
Convert object like arrays to arrays

## Install
```
npm --save-dev olta
```

## Use
```
const olta = require('olta');
var arrayLikeObject = {
  length: 4,
  '0': 'one',
  '1': 'two',
  '2': 'three',
  '3': 'four'
};

var realArray = olta(arrayLikeObject);
realArray.isArray() //true
