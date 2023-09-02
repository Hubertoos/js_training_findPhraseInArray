
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

function mapFnNew(array, callback) {
    const tabOut = [];
    array.reduce((acc,nval) => tabOut.push(callback(nval)),[]);
    return tabOut;
}



console.log('Nowa wersja map-a');
console.log(mapFnNew(tabIn, a => a+1));
console.log(mapFnNew(tabInText, a => a+'ma'+a));




// //function filterFn(array, callback) {}
// function filterFn(array, callback) {
//     console.log("Filter simulation")
//     console.log(callback(array));
// }

function filterFnNew(array, callback) {
    const tabOut = [];
    array.reduce((prvVal, currVal) => {
        if(callback(currVal)){
           tabOut.push(currVal);
        }
    },[]);
    return tabOut;
}


// filterFn (tabIn, array => {
//     let tabOut = [];
//     array.reduce((prvVal, currVal) => {
//         if (currVal%2==0) {    
//         tabOut.push(currVal);
//         }
//     },[]);
//     return tabOut;
// })

console.log("Filter orginal simulation")
console.log(tabIn.filter(a => a>4));
console.log("Filter new simulation")
console.log(filterFnNew(tabInText, a => a.includes('k')));


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

const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

  //const wynik1 = lineItems.reduce((sum, li) => sum + li.total, 0);
  //const wynik2 = lineItems.map(li => li.total).reduce((suma, nextVal) => suma+nextVal, 0);
  
  function funcReducer(suma, nextVal) {
    console.log(suma);
     console.log(nextVal);
    //  let i=0;
    //  if(nextVal>5){
    //     i= suma+nextVal;
    //  }
    //  return i;
     let tOut=[];
     if(nextVal>5){
        tOut=[...suma, nextVal];
     }
     //return [...suma, nextVal];
     return tOut;
     
    
    
  }
  //const wynik3 = lineItems.map(li => li.total).reduce(funcReducer, 0);
  const wynik4 = tabIn.reduce(funcReducer, []);

 // console.log(wynik3);
 console.log('wynik4')
  console.log(wynik4);

  let wynikMap = lineItems.map(item => item.description);
  wynikMap = wynikMap.filter(fltItem => fltItem.includes('s'));
  console.log(wynikMap);


//   forEachFn(tabIn, () => {
//     console.log('ddd');
//     //return tabIn[i-1];

// });

// // forEachFn(tabIn, () => {
// //     console.log('ddd');

// // });