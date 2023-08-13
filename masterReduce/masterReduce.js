
const tabIn = [1,2,3,4,5,6,7,8,9];
const tabInText = ["Ala", "ma","kota"];



function mapFn(array, callback) {
    console.log(callback(array));
}

mapFn (tabIn, array => {
    let a = [];
    a=array.reduce((acc,el) => acc + el + 1);
    return a;
    
    
    // array.forEach(element => {
    //     console.log(element);
    // });
})

/*
function filterFn(array, callback) {}

function everyFn(array, callback) {}

function someFn(array, callback) {}
*/