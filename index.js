
// Remake of Array.prototype.some
Array.prototype.some = function(cb){    
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (cb(element)) {
            return true
        }
    }

    return false
}

let arr = [5, 4, 3, 101, 102, 103, 501, 1000]

const some1 = arr.some(x => {return x > 5000})
const some2 = arr.some(x => {return x > 1})
console.log("test .some must return false", some1)
console.log("test .some must return true", some2)
// some() End

// Remake of Array.prototype.every
Array.prototype.every = function(cb){  
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (!cb(element)) {
            return false;
        }
    }

    return true
}


let arr2 = [5, 4, 3, 101, 102, 103, 501, 1000]
let arr3 = [1, 1, 1, 1]

const every1 = arr2.every(x => {return x > 4})
const every2 = arr3.every(x => x === 1)
console.log("test .every() must return false", every1)
console.log("test .every() must return true",every2)
// Remake of Array.prototype.every


// // Remake of Array.prototype.filter
// Array.prototype.filter = function(cb){
//     const result = [];
    
//     for (let i = 0; i < this.length; i++) {
//         const element = this[i];
//         if (cb(element)) {
//             result.push(element)
//         }
//     }

//     return result
// }

// let arrFilter = [5, 4, 3, 101, 102, 103, 501, 1000]

// const filter1 = arr.filter(x => {return x > 500})
// console.log("test .filter()", filter1)
// // filter() End