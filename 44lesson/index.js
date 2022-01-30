/*let x = +prompt("Введите число");
let y = 10;
console.log(x+y)

const a="hello";
const b="world";
console.log(a+" "+b);
console.log("${a} ${b}");
 const total=prompt("total sum")
 const month=prompt("каличество месяцев")
 const bankadd=

 const cush=prompt("sum")
 const currency=prompt("валюту")
 let USD= 83.8
 let EURO= 102.4
 let RUB=1.13
 if(currency===USD){
     console.log(cush/83.8)
 }else if(currency===EURO){
     console.log(cush/102.4)

 }else if(currency===RUB){
     console.log(cush/1.13)
 }else{
     console.log("Такой валюты нет")
 }
 for(let i=0;i<10; i++){
     if(i%2==0){
         console.log(`${i}-четное`)
     }else{
         console (`${i}`)
     }
 }
 let isContinue= true;
 while(isContinue){
     isContinue=confirm("continie")
 }
 const smiles = [":)", "xD", ":P", "T_T"];
const emojis = ["😊", "😆", "😋", "😭"];

const str=prompt("")
const index=smiles.indexOf (str)
console.log(emojis[index]);
for(i=0;i<smiles.length;i++){
    
}*/
const phones = ["Iphone 12 Pro", "Xiaomi mi 9T", "Samsung A10"];
const prices = [1100, 300, 600];
const request=prompt("название телефона").toLowerCase()
for(let i=0;i<phones.length;i++){
    if(phones[i].includes(request)){
        console.log(phones)
    }
}