var isPrime = (function(){
    var cache = {};

    function checkPrime(n){
        console.log('processing ', n);
        for(i=2; i <= (n/2); i++){
            if (n % i === 0) return false;
        }
        return true;
    }

    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = checkPrime(n);
        return cache[n];
    }
})();

//pure function
//function is deterministic

function add(x,y){
    return x + y;
}

add(10,20) //=> 30

var z = 100;

function add(x,y){
    return x + y + z;
}

add(10,20) //=> 130

z = 1000;

add(10,20) //=> 1030