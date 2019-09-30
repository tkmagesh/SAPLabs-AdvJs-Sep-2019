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

