const tabIn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tabInText = ['Ala', 'ma', 'kota'];

//function maprFn(array, callback) {}
// const result = tabIn.reduce((acc, value) => {
//     acc.push(value);
//     return acc;
// }, []);
// console.log(result); // undefined

function mapFn(array, callback) {
  const outMap = array.reduce((acc, nval, idx) => {
    acc.push(callback(nval, idx, array));
    return acc;
  }, []);
  return outMap;
}

// TOOD: odwzorować dokładnie te argumenty dla callback'a
// tabIn.map((value, index, array) => {})

console.log('Nowa wersja map-a');
console.log(mapFn(tabIn, (a) => a + 1));
console.log(mapFn(tabInText, (a, idx) => {
    a= a + ' ma ' +a;
    return [a , idx]}));

// //function filterFn(array, callback) {}

function filterFn(array, callback) {
  const tabOut = array.reduce((prvVal, currVal) => {
    if (callback(currVal)) {
      prvVal.push(currVal);
      }
      return prvVal;
  }, []);
  return tabOut;
}

console.log("Filter orginal simulation")
console.log(tabIn.filter(a => a>4));
console.log("Filter new simulation")
console.log(filterFn(tabInText, a => a.includes('k')));

//function everyFn(array, callback) {}

function everyFn(array, callback) {
  let isEvery = array.reduce((acc, nval) => {
    if (!callback(nval)) {
      acc = false;
    }
    return acc;
  }, true);
  return isEvery;
}
console.log('Every normal & simulation');
console.log(tabIn.every(a => a>3));
console.log(everyFn(tabIn, el => el>3));
/*
function someFn(array, callback) {}
*/
function someFn(array, callback) {
    let isAny = array.reduce((acc, nval) => {
        if (callback(nval)) {
          acc = true;
        }
        return acc;
      }, false);
      return isAny;
}
console.log('Some normal & simulation');
console.log(tabInText.some(a => a.includes('ma')));
console.log(someFn (tabInText, any => any.includes('ma')));
