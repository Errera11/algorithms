
const cache: any = {};

function cachingFunction(fn) {

    return function(n) {
        if(cache[n]) {
            console.log("Have taken from cache");
            return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        console.log("Solved value");
        return result;
    }
}

function factorial(n) {
    if(n > 1) return n * factorial(n - 1);
    return n;
}

console.log(cachingFunction(factorial)(5));
console.log(cachingFunction(factorial)(2));
console.log(cachingFunction(factorial)(3));
console.log(cachingFunction(factorial)(5));
console.log(cachingFunction(factorial)(0));
console.log(cachingFunction(factorial)(3));