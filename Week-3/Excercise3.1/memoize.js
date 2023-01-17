//! memoize function to reduce computing time using cache mechanism
function memoize(fn){
    return function(...args){
        const cache = new Map();
        const cacheKey = args.toString();
        // console.log(`performance cache  for ${cacheKey} is`, cache);
        if(cache.has(cacheKey)){
            //! return associated value to cacheKey
            return cache.get(cacheKey);  
        }
        //! if there is no cacheKey then set cacheKey value. 
        cache.set(cacheKey, fn(...args));
            return cache.get(cacheKey);

    }
}


//! verify cache performance using time
function performance(fn){
    console.time();
    fn();
    console.timeEnd();
}

//! reducer method
function multiplier(x,y){
    return x*y;
}

//!fastet multiplier using memoize mechanism
const multiplierPro = memoize(multiplier);


// ! comparing performance in time for same computing.
console.log(multiplierPro(34,37));
performance(() => multiplierPro(34,37));
console.log(multiplierPro(34,37));
performance(() => multiplierPro(34,37));
console.log(multiplierPro(37,39));
performance(() => multiplierPro(37,39));
console.log(multiplierPro(50,97));
performance(() => multiplierPro(50,97));
console.log(multiplierPro(50,97));
performance(() => multiplierPro(50,97));
console.log(multiplierPro(37,39));
performance(() => multiplierPro(37,39));
