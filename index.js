module.exports = function objectToArray(a) {
    console.log([].slice.call(a));
    if (a.toString() === '[object Object]') {
        return [].slice.call(a);
    } else{
       //throw new Error('Not an object');
    }

}