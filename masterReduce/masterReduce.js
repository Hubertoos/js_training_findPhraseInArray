
const tabIn = [1,2,3,4,5,6,7,8,9];
const tabInText = ["Ala", "ma","kota"];


//function maprFn(array, callback) {}
// const result = tabIn.reduce((acc, value) => {
//     acc.push(value);
//     return acc;
// }, []);
// console.log(result); // undefined

function mapFn(array, callback) {
    const tabOut = [];
    const a = array.reduce((acc,nval) => tabOut.push(callback(nval)), []); // TODO: tutaj wrzucić return
    return tabOut;
}

// TOOD: odwzorować dokładnie te argumenty dla callback'a
// tabIn.map((value, index, array) => {})


console.log('Nowa wersja map-a');
console.log(mapFn(tabIn, a => a+1));
console.log(mapFn(tabInText, a => a+'ma'+a));




// //function filterFn(array, callback) {}

function filterFn(array, callback) {
    const tabOut = [];
    array.reduce((prvVal, currVal) => {
        if(callback(currVal)){
           tabOut.push(currVal);
        }
    },[]);
    return tabOut;
}

console.log("Filter orginal simulation")
console.log(tabIn.filter(a => a>4));
console.log("Filter new simulation")
console.log(filterFn(tabInText, a => a.includes('k')));


//function everyFn(array, callback) {}

function everyFn(array, callback) {
    let isEvery = true;
    array.reduce((acc, nval) => {
        if(!callback(nval)){
            isEvery=false;
        }
    },true);
    return isEvery;
}
console.log('Every normal & simulation');
console.log(tabIn.every(a => a>0));
console.log(everyFn(tabIn, el => el>0));
/*
function someFn(array, callback) {}
*/
function someFn(array, callback) {
    let isAny = false;
    array.reduce((acc, nval) => {
        if(callback(nval)){
            isAny=true;
        }
    },false);
    return isAny;
}
console.log('Some normal & simulation');
console.log(tabInText.some(a => a.includes('f')));
console.log(someFn (tabInText, any => any.includes('f')));