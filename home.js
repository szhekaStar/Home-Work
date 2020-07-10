//                                                                              выводить каждую букву с новой строки и длинну строки.
// let  name = "zheka";
// function eachChar (x) {
//   for ( let i = 0; i < x.length; i++){
//     console.log(x[i]);
//   }
//   console.log(x.length);
// }
// eachChar(name);


// let nameArr = ["zheka", "artem", "star", "john", "marry", "andy",
// "barbara", "sherlock", "carl", "watson", "barry", "andrew","roma"];
// let x = firsOrLast(nameArr);
// function firsOrLast(x) {
//   for(let i=0; i<x.length; i++){
//     let a = 0;                                                                  выводим имена первая и последняя буква а
//     let el1 = x[i][a];
//     if (el1 =='a') {
//       console.log(x[i]);
//     }
//     let b = x[i].length-1;
//     let el2 = x[i][b];
//     if (el2 =='a') {
//       console.log(x[i]);
//     }
//   }
// }

//
// let nameArr = ["zheka", "artem", "star", "john", "marry", "andy",
// "barbara", "sherlock", "carl", "watson", "barry", "andrew"];
// let x = sss(nameArr)
// console.log(x);
// function sss (x) {
//   let nameArr1 = [];
//   for(let i=0;i<x.length;i++) {                                               выводим имена где 1я буква а следущаяя r
//     let str = x[i];
//     for(let j=0;j<str.length;j++) {
//       if(str[j]=="a"&&str[j +1]=="r") {
//
//         nameArr1.push(str);
//       }
//     }
//   }
//   return nameArr1;
// }

//
// let salaries = {
//   szheka:160,
//   artem:100,
//   denis:130,
// };
// let sum = 0;
// for (let key in salaries){  //                                               код для суммирования всех зарплат и сохраните результат в переменной sum.
//   sum+=salaries[key];
// }
//   alert(sum);
//
//
// let userName = prompt ("кто тут?" , '');
// if (userName == "админ") {
//   let pass = prompt ("ведите пароль" , '');
//   if (pass == 'я главний') {
//     alert ("здраствуйте");                                                   создали админку с паролем
//   } else if (pass == '' || pass == null) {
//     alert ("отмена");
//   }else {
//     alert("не верный пароль");
//   }
// } else if (userName == '' || userName == null) {
//   alert ("отмена");
// } else {
//   alert ("я не знаю  вас ");
// }

//                                                                                 строку преобразовали в массив строк и снова переобразовали в строку И вывели именна в строке и в массиве строк
// let names = "szheka,artem,vasya";
// let arr = names.split(',');
// let x = functionName(arr);
// function functionName(x) {
//     let myarray = x ;
//     myarray.sort();
//     console.log(myarray);
//     let arr = myarray;
//     let str = arr.join(",");
//     console.log(str);
//   }
//
//                                                                                 вывели I AM X
// let str = "WUBWUBIWUBAMWUBWUBX ";
// let song = songDecoder(str);
// function songDecoder(song){
//   const str1 = song.replace(/wub/gi," ");
//   const str2 = str1.replace(/\s+/g,' ').trim();
//   return str2;
//
// }
// console.log(song);
//
//                                                                                 вывели именна где не больше 4х букв
// let name = ["Ryan", "Kieran", "Mark"];
// let friends = friend(name);
// // function friend(friends){
//   const result = friends.filter(friends => friends.length ==4);
//
//   return result;
// }
//   console.log(friends);
//
//                                                                                  выводим массив чисел меньше 10 больше 0 при помощи forEch
// let num = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,-20,-10,-30,-1,-2,-3];
// let result = [];
//
// num.forEach(function(x){
//   if(x>=0 && x<=10) {
//     result.push(x);
//   }
// });
// console.log(result);
//
//                                                                                  выводим массив чисел меньше 10 больше 0 при помощи цыкла
// let num = [200,-10,-5,0,20,8,7,6,4,9];
// let b = [];
// for(let i=0;i<num.length;i++){
//   if (num[i]<=10 && num[i]>=0){
//       b.push(num[i]);
//   }
// }
// console.log(b);
//
//                                                                                 При помоще цыкла умножаем все числа в массиве на 2
// let num = [1,2,3,4,5,6,7,8,9];
// for (let i = 0;i<num.length;i++ ){
//   num[i]=num[i]*2;
// }
// console.log(num);
//
//                                                                                 При помоще цыкла умножаем все числа в массиве на 2,при этом переменную num оставляем без изменений
// let num = [1,2,3,4,5,6,7,8,9];
// let b = [];
// for(let i=0;i<num.length;i++){
//   b[i]=num[i]*2;
// }
// console.log(num);
// console.log(b);
//
//                                                                                 умножае массив чисел при помощи метода map
// let num = [1,2,3,4,5,6,7,8,9];
// let sum = num.map(function(x) {
//   return x*2;
// });
// console.log(sum);
//
//                                                                                 удаляем повторяющийся елемент массива при помощи цыкла и undexOf!!!
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"];
// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i<arr.length;i++){
//     if(result.indexOf(arr[i])<0) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
//
// removeDuplicates(arr);
//
//                                                                                 удаляем повторяющийся елемент массива при помоще forEach indexOf
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"];
//   let result =[];
//   arr.forEach(function(x){
// if (result.indexOf(x)<0){
// result.push(x);
// }
//   });
//   console.log(result);
//
//
//
//                                                                                 вывели с массива 1й елемент а именно число 1
// let array = [1,2,3,4,5,6,7,8,9];
//
//  function getFirst(array, n) {
// if(array == null) return false;
// if(n == null) return array[0];
// return array.slice(0,n)
// };
//
// console.log(getFirst(array));
//

// function functionName(array,n) {
//   if(!array|| !n ) return array;
//   return array.slice(0,n);
// }
//
// console.log(functionName(array,2));


                                                                                // выводим ёлку

// function functionName(name,n) {
//   let s = "";
// for(let i = 0;i<n;i++) {
//   s+=name;
//   console.log(s);
// }
// }
//  functionName('#', 10);
//
//
//                                                                                 вывожу ёлку с цыфр
// let str = "";
// for (let i = 1 ; i <= 9; i++ ){
//   for (let j =0 ; j < i ; j++ ){
//     str+=i;
//   }
//   console.log(str);
//   str = "";
// }




                                                                            // код который выводит наименшее число
// let x=4 , b = 5;
// let z  = min(x,b);
// function min(x,b) {
// if(x > b){
//   return b;
// }else{
//   return x;
// }
// }
// console.log(z);
// min(x,b);




//                                                                                 выводим числа  по нарастанию
// let values = [2,0,5,1,3,4,8,9,10,12,13,25];
// values.sort(function(value1, value2){
//   return value1 - value2
// });
// console.log(values);


                                                                                  // выводим числа  по нарастанию цыклом
// let arr = [3,1, 2, 3, 4, 10, 5, 6, 7];
// let count = arr.length - 1;
// for (let i = 0; i < count; i++)
//   for (let j = 0; j < count - i; j++)
//     if (arr[j] > arr[j + 1]) {
//       let max = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = max;
//     }
// console.log(arr );



                                                                                // вывидим числа ,в которых первая цыфра 1,2,5
// let arr = [10, 20, 30, 50, 235, 3000];
// arr.forEach((item)=> {
// if(String(item).search(/(1|2|5)/)===0)
//   console.log(item);
//   });


                                                                                // первую букву в тексте делаем большой
// let name = "szheka";
// name = name[0].toUpperCase()+name.substr(1);
// console.log(name);

// let name = "szheka";
// let str = name.split("");
// str[0]=str[0].toUpperCase();
// let res = str.join("");
// console.log(res);


//                                                                                 перевернул массив
// let name = "49927398716";
// let res = name.split("").reverse().join("");
// console.log(res);

// let name = 49927398716;
// let str = name.toString().split("").reverse().join("");
// let num = +str;
// console.log(num);
                                                                                // перевернул массив при помощи for
// let num = [1,2,3,4,5,6,7,8,9];
// let res = [];
// for (let i = num.length -1;i>=0; i--){
//   res.push(num[i]);
// }
// console.log(res);


//                                                                                 Дан массив с числами. С помощью цикла проверьте,
//                                                                                 что в нем есть элемент со значением 5.
// let arr = [5,5,255,3];
// for (let i = 0; i <arr.length; i++) {
// if ( arr[i] === 5){
//       console.log("есть");
//       break;
//   }
// }


// let arr = [5,5,255,3];
// console.log(includes(5));




                                                                                //  Найдите самый большой элемент
                                                                                // в массиве чисел (но используй цикл)
                                                                                // let num = [3,1, 2, 3, 4, 10, 5, 6, 7];
                                                                                // let m = num[0]
                                                                                // for(let i = 0; i <num.length;i++) {
                                                                                //   if(num[i] > m){
                                                                                //     m = num[i]
                                                                                //   }
                                                                                // }
                                                                                // console.log(m);


                                                                                //Дан массив с числами. Найдите среднее арифметическое
                                                                                // его элементов (сумма элементов, делить на количество).
// let arr = [5,5,5,5];
// let sum=0;
// for (let i = 0; i<arr.length;i++){
//   sum+=arr[i];
// }
// console.log(sum/arr.length);


//                                                                                 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд
// let arr = [5,1,1,5];
// function arrNum (x) {
//   for (let i = 0; i <x.length; i++){
//     if(arr[i] == arr[i+1]){
//       console.log(arr[i]);
//     }
//   }
// }
// arrNum(arr);



//                                                                                 Функция которая возвращает квадрат числа. Число передается параметром.
// let num = 5;
// function sumNum (x){
// let sum = x*x;
// console.log(sum);
// }
// sumNum(num);

// function number (x) {
// return x*x;
// }
// let b = number (5);
//   console.log(b);



                                                                                // С помощью цикла найдите сумму чисел от 1 до 100.
// let num = 1;
// let result = 1;
// for(let num = 0; num <100; num++) {
//   result = result +num;
//   console.log(result);
// }



                                                                                // Дан массив с числами. Числа могут быть положительными и отрицательными.
                                                                                // Найдите сумму положительных элементов массива.
// let arr = [5,-2,-3,5,0,5,-3];
// let result = 0;
// for (let i = 0; i<arr.length;i++){
//   if(arr[i]>=0){
//     result +=arr[i];
//   }
// }
//   console.log(result);



                                                                                // Выведите на экран только те числа из массива, которые начинаются на цифру 1, 3 или 5.
  // let arr = [100,10,300,30,50,500,450,650,750];
  // for (let i = 0; i <arr.length;i++){
  //   let str = arr[i] + "";
  //   if(str[0]=="1"|| str[0]=="3"||str[0]=="5"){
  //     console.log(arr[i]);
  //   }
  // }



                                                                                // вывожу день недели в данном случае вывожу пятницу
// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let day = 4;
// for (let i = 0 ; i <week.length;i++){
//   if(i == day){
//     console.log(week[i]);
// }
// }



                                                                                // сумма двухмерного массива
// let num = [[5,5],[5,5],[5,5,5]];
// let sum = 0;
// for (let i = 0 ; i<num.length;i++) {
//   for (let j = 0; j <num[i].length;j++){
//     sum+=num[i][j];
//   }
// }
// console.log(sum);


//                                                                                 нашел сумму 5.7.9.4.5  c двух массивов
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let arr3 = [];
// let count = 0
//   if (arr1.length > arr2.length) {
//   count = arr1.length;
//   } else {
//    count = arr2.length;
//   }
//       for (let i = 0; i < count; i++) {
//         if (arr2[i] === undefined) {
//             arr2.push(0);
//         } else {
//             if (arr1[i] === undefined) {
//               arr1.push(0);
//             }
//         }
//         arr3.push(arr1[i] + arr2[i]);
//       }
//       console.log(arr3);


//                                                                                 найти все числа и их количество
// let num = [1,1,1,1,1,2,20,3,4,5,6,10];
// function repeatingElemets (arr) {
//   let result = {};
//   for ( let i = 0; i < arr.length;i++) {
//     if ( typeof result[arr[i]] == "undefined") {
//       result[arr[i]]=1;
//     } else {
//       result[arr[i]]++;
//     }
//   }
//   console.log(result);
// }
// repeatingElemets(num);



                                                                                // находим уникальный елемент в нашем случае число 2
// let arr = [1,1,1,2,1,1];
// function repeatingElemets (arr) {
//   let result = {};
//   for ( let i = 0; i < arr.length;i++) {
//     if ( typeof result[arr[i]] == "undefined") {
//       result[arr[i]]=1;
//     } else {
//       result[arr[i]]++;
//     }
//   }
//   for (let key in result) {
//     if(result[key] == 1){
//       return key;
//     }
//   }
// }
// console.log(repeatingElemets(arr));

                                                                                  // сортируем и выводим одномерный массив
                                                                                  // [1,2,3,4,5,6,7,8,9]
// let arr = [[3,2,1],[4,6,5],[],[9,7,8]];
// function flattenAndSort (array) {
//   let arr3 = [];
//   for (let i = 0 ; i < array.length;i++){
//     let arr1 = array[i];
//     for(let j = 0; j < arr1.length;j++){
//     arr3.push(arr1[j]);
//     }
//   }
//   arr3.sort(function(value1,value2){
//     return value1 - value2;
//   });
//   return arr3;
// }
// let x = flattenAndSort(arr);
// console.log(x);



                                                                                // Отсортировать массив объектов по количеству
                                                                                 // свойств объекта
//
// let objectArray = [{a : 'a', b : 'b'}, {a : 'a'}, {a : 'a', b : 'b', c : 'c'}];
// objectArray.sort(function(a,b) {
//   return Object.keys(a).length - Object.keys(b).length;
// })
// console.log(objectArray);


                                                                                // Преобразовать массив чисел в массив функций,
                                                                                // которые будут выводить те числа в консоль

// let  numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
// function newArr (arr) {
//   let result = [];
//   for(let i = 0; i <arr.length;i ++) {
//     let newFun = function(){
//       console.log(arr[i]);
//     }
//     result.push(newFun)
//   }
//   return result
// }
// let log = newArr(numberArray);
// log[4]()
