/* eslint-disable no-restricted-syntax */

const tabIn = [1,2,3,4,5,6,7,8,9];
const tabInText = ["Ala", "ma","kota"];

//forEach
console.log('forEach Simulation');
const forEachFn = (array, callback) => {
    console.log(callback(array));
};

forEachFn(tabIn, (tab) => {
    let suma=0;
    for (const elem of tab) {suma += elem}
    return suma;
})

//map
console.log('map Simulation');
const mapFn = (array, callback) => {
    return callback(array);
};

const mapSim = (tab) => {
    const tabOut = [];
    // for (let i=0; i<tab.length; i++) {
    //     tabOut.push(tab[i]+10);
    // }
    for (const element of tab) {tabOut.push(element+10)}
    return tabOut;
}

console.log(mapFn(tabIn,mapSim));
console.log(tabIn);

//map alter version
console.log('mapAlter Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);
const mapFnAlt = (array, callback) => {
    console.log(callback(array));
};

mapFnAlt (tabIn, tab => {
    const tabOut = [];
    // for (let i=0; i<tab.length; i++) {
    //     tabOut.push(tab[i]+10);
    // }
    for (const element of tab) {tabOut.push(element+10)}
    return tabOut;
})


//filter
console.log('filter Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);
const filterFn = (array, callback) => {
    return callback(array);
};

const filterSim = (tab) => {
    const tabOutFiltered = [];
    for (const element of tab) {
        if (element%2==0) {
        tabOutFiltered.push(element);
        }
    }
    
    return tabOutFiltered;
}

console.log(filterFn(tabIn,filterSim));

//filter alter version
console.log('filter alter Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const filterFnAlt = (array, callback) => {
    return callback(array);
};

filterFnAlt (tabIn, tab => {
    const tabOutFiltered = [];
    for (const element of tab) {
        if (element%2==0) {
        tabOutFiltered.push(element);
        }
    }
    return tabOutFiltered;
})

console.log(filterFn(tabIn,filterSim));

//const entriesFn = (array) => {};
console.log('entries Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabInText);

const entriesFn = (array) => {
    const tabOutEntries = [];
    array.forEach((element, index) =>
    tabOutEntries.push([index,element]));
    return tabOutEntries;
};


console.log(entriesFn(tabInText));

// let seqn = tabIn.entries();
// console.log("Applying the Array entries method:");

// for (let x of seqn) {
// 	console.log(x);
// };




//const reduceFn = (array, callback, inital) => {};
console.log('reduce Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const reduceFn = (array, callback, inital) => {
    return callback(array, inital);
};

const reduceFnSim =  (tab, initialValue) => {
    let sum = initialValue;
    for (const val of tab) {
        sum += val;
    }
    return sum;
};
console.log(reduceFn(tabIn,reduceFnSim,0));

//const everyFn = (array, callback) => {};
console.log('every Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const everyFn = (array, callback) => {
    console.log(callback(array));
};

everyFn (tabIn, tab => {
    let isTrue = true;
    for (const val of tab) {
        if (val<4 || val>9) {
            isTrue = false
        };
    }
    return isTrue;
});

//const someFn = (array, callback) => {};

console.log('some Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const someFn = (array, callback) => {
    console.log(callback(array));
};

someFn (tabIn, tab => {
    for (const val of tab) {
        if (val>0 && val<10) {
            return true;
        };
    }
    return false;
});