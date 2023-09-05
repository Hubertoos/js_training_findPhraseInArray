/* eslint-disable no-restricted-syntax */

//const tabIn = [1,2,3,4,5,6,7,8,9];
const tabInText = ["Ala", "ma","kota"];
const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

//forEach
console.log('forEach Simulation');

const tabIn = [1,2,3,4,5,6,7,8,9];
function forEachFn (array, callback) {
    for (const el of array) {callback(el)};
};

forEachFn(tabIn, (i) => {
    //console.log('ddd');
    return tabIn[i-1];
});

console.log('Test1');
forEachFn(lineItems, (el) => {
    console.log(el.description);
});

lineItems.forEach((el) => console.log(el.description));



//map
console.log('map Simulation');
function mapFn (array, callback) {
    const newTab = [];
    for (const el of array) {newTab.push(callback(el))};
    return newTab;
};
console.log('test mapa');
const testMap = mapFn(tabIn, (el) => el+10);
console.log(testMap);


//filter
console.log('filter Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);
const filterFn = (array, callback) => {
    const newTabOut = [];
    for (const el of array){
        if (callback(el)===true){
            newTabOut.push(el);
        }
    }
    return newTabOut;
};

console.log(filterFn(tabIn, e => e>5));


//const entriesFn = (array) => {};
console.log('entries Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabInText);

const entriesFn = (array) => {
    const tabOutEntries = [];
    let idx=0;
    for (const el of array){
        tabOutEntries.push([idx,el]);
        idx +=1;
    }
    return tabOutEntries;
};

console.log(entriesFn(tabInText));




//const reduceFn = (array, callback, inital) => {};
console.log('reduce Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const reduceFn = (array, callback, inital) => {
    let acc = inital;
    for (let idx=0;idx<array.length; idx++){
        acc =+callback(acc, array[idx],idx, array);
    }
    return acc;
};

// const reduceFn = (array, callback, inital) => {
//     let acc = inital;
//     for (const nextVal of array){
//         acc =+callback(acc, nextVal, array);
//     }
//     return acc;
// };

console.log('Standard reduce: ');
console.log(tabIn.reduce((acc, nextval) => acc+nextval,1));

console.log('New reduce: ');
console.log(reduceFn(tabIn,((acc,nval) => acc+nval),1));

//const everyFn = (array, callback) => {};
console.log('every Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const everyFn = (array, callback) => {
    let isEvery=true;
    for (const el of array){
        if(callback(el)===false){
            isEvery=false;
            break;
        }};
        return isEvery;
};

const evryWynik = everyFn(tabIn, (i) => i>0);
const evryWynikEvery = tabIn.every( e => e>0);
console.log(evryWynik);
console.log(evryWynikEvery);



//const someFn = (array, callback) => {};


console.log('some Simulation');
console.log( 'Tabela wejsciowa/wyjsciowa:');
console.log(tabIn);

const someFn = (array, callback) => {
    let isAny=false;
    for (const el of array){
        if(callback(el)===true){
            isAny=true;
            break;
        }};
        return isAny;
};

console.log(someFn (tabIn, e => e==9));
