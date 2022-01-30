/*let a='dog cat mouse'
let b='home house'
console.log( a.toUpperCase())
console.log( b.toUpperCase())
/*/ 

/*const arr=["hello", "www", "bbc", "good"]
arr.includes('hello')
arr.includes('good')
console.log(arr.includes('good'))
console.log(arr.includes('hello'))

 // ['hello', 'good']


//3. Воспользуйтесь методами split, substr, toLowerCase


    function withoutVowels(string, replaceWith) {
  return string.split(/[aeyiou]/).join(replaceWith)
}

console.log(withoutVowels('Play with Me'));*/




// 4. Воспользуйтесь методами 
//const getFirstWords=["I know", "am i big?", "small talk"];
//const newarr =getFirstWords.slice(1,4)
//console.log(newarr)
 // 'I am small'

// 5. Воспользуйтесь методом slice
//function replaceLast2Char(words, char) {}
//replaceLast2Char(["dodo", "real", "mind"], "~"); // 'do~re~mi~'

//6. Методы split, join
function addSeparator(str, sep) {
  const arrayOf=str.split(sep)
 
}


console.log(addSeparator("John Maria Ben", ";")).join(); // 'John;Maria;Ben

//  7. Методы concat, reverse
/*function concatEnds(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  arr3.reverse()
}

console.log(concatEnds)([1, 2, 3], [8, 9, 0]); // [1, 2, 3, 0, 9, 8]

// 8. splice, unshift, concat
//function moveToStart(index, arr) {}
//moveToStart(2, ["a", "b", "c", "d"]); // ['c', 'a', 'b', 'd'];
//moveToStart(1, ["a", "b", "c", "d"]); // ['b', 'a', 'c'g, 'd'];

// 9. indexOf, splice, push
//function addNewItemRemoveOld(arr, item) {}

//([3, 6, 2], 1); // [3, 6, 2, 1];
//addNewItemRemoveOld([3, 6, 2], 3); // [6, 2, 3];

 //10. slice, concat
/*function changeHalf(arr, index) {
 const deleteItem=arr.slice(0,index);
 const resuilt=arr.concat(deleteItem);
 return resuilt;
}

console.log (changeHalf)([4, 5, 7, 2, 8], 3); // [2, 8, 4, 5, 7]
console.log(changeHalf)([4, 5, 7, 2, 8], 1); // [5, 7, 2, 8, 4]
changeHalf([4, 5, 7, 2, 8], 0); // [4, 5, 7, 2, 8]*/
