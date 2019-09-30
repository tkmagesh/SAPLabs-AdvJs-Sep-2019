var isOddOrEven = (function(){
    var cache = {};

    function checkOddOrEven(n){
        console.log('processing ', n);
        return n % 2 === 0 ? 'even' : 'odd';
    }

    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = checkOddOrEven(n);
        return cache[n];
    }
})();

function memoize(fn){
    var cache = {};

    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = fn(n);
        return cache[n];
    }
}

var isPrime = memoize(function checkPrime(n){
    console.log('processing ', n);
    for(i=2; i <= (n/2); i++){
        if (n % i === 0) return false;
    }
    return true;
})

var isOddOrEven = memoize(function checkOddOrEven(n){
    console.log('processing ', n);
    return n % 2 === 0 ? 'even' : 'odd';
})
//pure function
//function is deterministic

function memoize(fn){
    var cache = {};

    return function(){
        var key = JSON.stringify(arguments);
        if (!cache.hasOwnProperty(key))
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}

var add = memoize(function add(x,y){
	console.log('processing ', x , ' and ', y);
    return x + y;
})