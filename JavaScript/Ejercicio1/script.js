//Autor: Jonathan Arroyo Lara

const elements = [2, 3, 4, 6];
const elements2 = [123, 67, 890, 4]
const elements3 = [2, 3, 7, 9, 4, 5, 6, 9, 12]


function multiplyElements(elementsArray){
var resultArray = [];

for (var i = 0; i < elementsArray.length; i++){
    var result = 1;

    for (var j = 0; j < elementsArray.length; j++){
      if(i != j){
        result *= elementsArray[j];
      }
      resultArray[i] = result;
    }
}

console.log(resultArray);
}
multiplyElements(elements);
multiplyElements(elements2);
multiplyElements(elements3);