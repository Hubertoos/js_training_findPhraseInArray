
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