'use strict';

// YOU KNOW WHAT TO DO //

/**
 * indentify: Designed to return the value unchanged.
 *
 * @param {Value} val: The value we want to return.
 */
function identify(val){
    return val;
}
module.exports.identify = identify;
/**
 * typeOf: Designed to return a string value of the type of data type that value is. 
 * 
 * @param {Value} val: The value we want check the type of and return a string value.
 */
 function typeOf(val){
    if(Array.isArray(val)){
        return "array"
    } else if (val === null){
        return "null"
    } else if(val === undefined){
        return "undefined"
    } else if (typeof val === "object"){
        return "object"
    } else if (typeof val === "function"){
        return "function"
    } else if (typeof val === "string"){
        return "string"
    } else if (typeof val === "number"){
        return "number"
    } else if (typeof val === "boolean"){
        return "boolean"
    }
}
module.exports.typeOf = typeOf;
/**
 * first: Designed to return a new array containing <num> amount of values in <array> starting from the beginning.
 * 
 * @param {Array} arr: The array we are looping through. 
 * @param {Number} num: The number representing the amount of values from array we'd like to return.
 */
 function first(arr, num){
    let firArr = [];
    if(Array.isArray(arr)){
        if(isNaN(num)){
            return arr[0]
        } else if(num < 0){
            return []
        } else if(num > arr.length){
            for(let i = 0; i < arr.length; i++){
                firArr.push(arr[i]);
            }
        } else {
            for(let i = 0; i < num; i++){
                firArr.push(arr[i]);
            }
        }
        return firArr;
    } else {
        return [];
    }
}
module.exports.first = first;
/**
 * last: Designed to return a new array contaning <num> amount of values in <array> starting from the end, backwards.
 * 
 * @param {Array} arr: The array we are looping through.
 * @param {Number} num: The number representing the amount of values, from the array's last index backward, we want to return.
 */
 function last(arr, num){
    let lastArr = [];
    if(Array.isArray(arr)){
        if(isNaN(num)){
            return arr[arr.length-1]
        } else if(num < 0){
            return [];
        } else if(num > arr.length){
            for(let i = arr.length-1; i >= 0; i--){
                lastArr.unshift(arr[i]);
            }
        } else if(num < arr.length){
            for(let i = num; i > 0; i--){
                lastArr.unshift(arr[i])
            }
        }
        return lastArr;
    } else {
        return [];
    }
}
module.exports.last = last;
/**
 * indexOf: Designed to return the index of <array> that is the first occurrance of <value> and return -1 if <value> is not in <array>
 * 
 * @param {Array} arr: The array we are looping through to find it's first index.
 * @param {Value} val: The value we are searching for in the array.
 */
function indexOf(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;
/**
 * contains:  Return true if the array contains the value and return false otherwise
 * 
 * @param {Array} arr: The Array we are looping through. 
 * @param {Value} val: The value we are trying to find in array to get it's index.
 */
function contains(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * unique: Return a new array of all elements from <array> with duplicates removed.
 * 
 * @param {Array} arr: Return true if <array> contains <value> and return false otherwise.
 */
function unique(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(indexOf(arr, arr[i]) === i){
            newArr.push(arr[i])        
        } 
    }
    return newArr;
}
module.exports.unique = unique;
/**
 * filter: Returns a new array of elements for which calling <function> returned .
 * First call the action function for each element in the array, passing the arguments (the element, it's index, the Array)
 * 
 * @param {Array} arr: The array we are looping through checking if calling the function on each element returns true.
 * @param {Function} action: The function we are applying to every element in the Array.
 */
 function filter(arr, action){
    let newArr = []
    each(arr, function(e, i, a){
        if(action(arr[i], i, arr) === true){
            newArr.push(arr[i])
        }
    })
    return newArr;
}
module.exports.filter = filter;
/**
 * reject: Returns a new array of elements for which calling function for each element while passing the arguments
 * (the element, it's index, <array>) returned false
 * 
 * @param {Array} arr: The array we are looping through.
 * @param {Function} action: The function we are running on each element in the array.
 */
function reject(arr, action){
    let newArr = []
    each(arr, function(e, i, a){
        if(action(arr[i], i, arr) === false){
            newArr.push(arr[i])
        }
    })
    return newArr;
}
module.exports.reject = reject;
/**
 * partition: Return an array that is made up of 2 sub arrays:
 * 0) An array that contains all the values for which calling function with the argument(the element, it's index, Array) returned something truthy.
 * 1) An array that contains all the values for which calling function with the argument(the element, it's index, <array>) returned something falsy.
 * 
 * @param {Array} arr: The array we are looping through and accessing the values of.
 * @param {Function} action: The function we are applying to each element in the array.
 */
function partition(arr, action){
    let trueArr = []
    let falseArr = []
    let resultArr = []
    each(arr, function(e, i, a){
        if(action(arr[i], i, arr) === true){
            trueArr.push(arr[i])
        } else {
            falseArr.push(arr[i])
        }
    })
    resultArr.push(trueArr)
    resultArr.push(falseArr)
    return resultArr;
}
module.exports.partition = partition;
/**
 * map: Return a new array contaning the return value of each function call on each element in an Array or Object.
 * 
 * @param {Array or Object} collection: If collection is an Array call the function for each element using (the element, it's index, Array)
 *                                      If collection is an Object call the function for each element using (the property, it's key, Object)
 * @param {Function} action: The function being called on each element.
 */
function map(collection, action){
    let newArr = [];
    if(Array.isArray(collection)){
        each(collection, function(e, i, a){
            newArr.push(action(collection[i], i, collection))
        })
    } else {
        each(collection, function(prop, key, collection){
            newArr.push(action(collection[key], key, collection))
        })
    }
    return newArr;
}
module.exports.map = map;
/**
 * pluck: Return an array containing the value of each object's property for every element in the array.
 * 
 * @param {Array} arr: The Array of Objects we are looping through.
 * @param {Value} prop: The property of each object we are pushing into an Array.
 */
function pluck(arr, prop){
    let newArr = []
        map(arr, function(v, key, collection){
        newArr.push(v[prop])
        })
    return newArr;
}
module.exports.pluck = pluck;
/**
 * every: Weather an Object or Array, return true if the return value of calling function for EVERY element is true, otherwise return false.
 * 
 * @param {Array or Object} collection: The object or array we are iterating through 
 * @param {Function} action: The function being called on each element.
 */
 function every(collection, action){
    let result = true
    if(typeof action !== "function"){
        each(collection, function(e, i, a){
            if(e === false){
                result = false;
        }
        })
        return result
    } else { 
        each(collection, function(e, i, a){
        if(action(collection[i], i, collection) === false){
            result = false
        }
    })
    }
    return result
}
module.exports.every = every;
/**
 * some: Weather an Array or Object, return false if the return value of calling function with it's parameters is false for ALL elements.
 * 
 * @param {Array or Object} collection: The collection we are looping through and running the function on. 
 * @param {Function} action: The function passed to each element.
 */
function some(collection, action){
    let result = false
    if(typeof action !== "function"){
        each(collection, function(e, i, a){
            if(e === true){
                result = true;
        }
        })
        return result
    } else { 
        each(collection, function(e, i, a){
        if(action(e, i, a) === true){
            result = true
        }
    })
    }
    return result
}
module.exports.some = some;
/**
 * reduce:1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *        2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *        3) On the very first iteration, use <seed> as the "previous result"
 *        4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *        5) After the last iteration, return the return value of the final <function> call
 * 
 * @param {Array} arr: The array we are iterating through and compouding seed with.
 * @param {Function} action: The function we are applying to every value.
 * @param {seed} seed: The value we want to begin with while iterating, set to the arrays first index if it is undefined.
 */
function reduce(arr, action, seed){
    let memo;
    if(seed === undefined){
        memo = arr[0]
    each(arr, function(e, i, a){
        if(i !== 0){
        memo = action(memo, e, i, a)
        }
    });
    return memo
    } else {
        memo = seed;
    each(arr, function(e, i, a){
        memo = action(memo, e, i, a)
    });
    return memo;
    }
}
module.exports.reduce = reduce;
/**
 * extend: 1) Copy properties from <object 2> to <object 1>
 *         2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *         3) Return the update <object 1>
 * 
 * @param {Object} obj1: The object you want to add the properties too.
 */
 function extend(obj1, ...obj){
    Object.assign(obj1, ...obj)
    return obj1
}
module.exports.extend = extend;