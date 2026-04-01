// let arr = [1 , 2, 'ggg' , null]
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);

// }

// Array methods 

// let array = [1, 2, 3, 4]
// let b = array.join("/")
// console.log(b);  // output = 1/2/3/4

// let hi = ['ho' , 'a' , 'b ' , ' 4']
// let r =  hi.pop() // remove last element of array ./ let r =  hi.pop() this retain the pop element
// console.log(r);
// hi.shift()  // remove first element of array 
// console.log(hi); // output is ['a' , 'b'] because pop remove the last element or array or shift remove first . 

// let a = [ 1,2,3,4,5]
// a.push(3) push //add element in array last
// a.unshift(2) //unshift add element in array first 
// console.log(a ,);

// let num =[1,2,3,4,5,6]
// delete num[0] // delete remove the element but it not effect on array length .
// console.log(num);

// let a = [1,2,3,4,5,6,7,8]
// let b = [1,333,4,455,6,77,]
// console.log(a.concat(b)); // concat add or array to another array but now change the array give us a copy of concat array .

// let a = [1 , 39,4,7 ,22,32,43,33]
// console.log(a.sort()); // a.sort() number ko alpabatly sequence sa rakhta ha jasa [a,d,c,b] = [a,b,c,d] .

// let compare = (a,b) =>{
//     return a - b
// } 

// let num = [21,32,45,2,1,5,4,6,7,3] // agar hum ya cahTa ha ka short() alpabatly naHi balKa Numeric kara to compare function kam ata ha . agar a - b ho ga to number low to high sequence ma a jai ga or agar b -a ho ga to high to low .
// console.log(num.sort(compare));

// let nu = [1,2,3]
// console.log(nu.reverse());// reverse() value ko reverse kar ta ha

// let a = [1 , 39,4,7 ,22,32,43,33]
// let spliceReverse = a.splice(1,3,333,121,100) // agar hum splice ko alAg variable ma store karWa to Hama wo value Mila Gi Jo hm na Splice ka ZarYa  delete KaWa De ha .
// a.splice(1,3,333,121,100) // splice sa zarYa hum array sa koi value delete or add kar wa sakTa ha . pahLa huma start index or pir end index da Kar value remove karWa ta ha . or  pir new value add karWa ta ha .
// console.log(spliceReverse);
// console.log(a);

// let a = [1 , 39,4,7 ,22,32,43,33]
//  let ab = a.slice(0,3)
// console.log(ab);

let h =[9,8,7[8,7[6,9]]]
h.flat(Infinity)
console.log(h);
