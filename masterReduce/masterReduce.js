
const tabIn = [1,2,3,4,5,6,7,8,9];
const tabInText = ["Ala", "ma","kota"];


//function maprFn(array, callback) {}
function mapFn(array, callback) {
    console.log(callback(array));
}

mapFn (tabIn, array => {
    let tabOut = [];
    array.reduce((prvVal, currVal) => {
        tabOut.push(currVal+1);
    },[]);
    return tabOut;
})


//function filterFn(array, callback) {}
function filterFn(array, callback) {
    console.log("Filter simulation")
    console.log(callback(array));
}

filterFn (tabIn, array => {
    let tabOut = [];
    array.reduce((prvVal, currVal) => {
        if (currVal%2==0) {    
        tabOut.push(currVal);
        }
    },[]);
    return tabOut;
})



//function everyFn(array, callback) {}

function everyFn(array, callback) {
    console.log("Every simulation");
    console.log(callback(array));
}

everyFn (tabIn, array => {
    let isEvery = true;
    array.reduce((prvVal, currVal) => {
        if (prvVal<=0 || currVal<=0) {    
            isEvery = false;
            }
    });
    return isEvery;
})
/*
function someFn(array, callback) {}
*/
function someFn(array, callback) {
    console.log("Some simulation");
    console.log(callback(array));
}

someFn (tabInText, array => {
    let isAny = false;
    array.reduce((prvVal, currVal) => {
        if (prvVal== "Kota" || currVal=="Kota") {    
            isAny = true;
            }
    });
    return isAny;
})