const people = [ 
   {name: 'oleg', age: 18}, 
   {name: 'Erin', age: 28}, 
   {name: 'Carl', age: 42}, 
   {name: 'Lloyd', age: 12}, 
   {name: 'Samuel', age: 31}, 
   {name: 'William', age: 65}, 
   {name: 'Ric', age: 53}, 
   {name: 'Mick', age: 12}, 
   {name: 'Ludwig', age: 74},
   {name: 'Hilaire', age: 10}, 
   {name: 'Menachem', age: 4}, 
   {name: 'Saul', age: 52}, 
   {name: 'Robert', age: 65}, 
   {name: 'Blair', age: 12}, 
   {name: 'Robert', age: 81}, 
   {name: 'Peter', age: 69}
];

/* 
1. Вывести в консоль первый элемент массива
 */

// let a  = people.find(item => people)
// console.log(a)
 console.log(people.find(item => item))

/*
2. Вывести в консоль последний элемент массива
    1. Вывести в консоль кол-во элементов в массиве
*/
console.log(people.find(item => item === people[people.length -1]));
console.log(people.length)

/*
  3. Вывести в консоль все элементы массива используя наиболее удобный для этого метод
 */
// console.log(people.map(item => item))
console.log(people.forEach((item,index,arr) =>
console.log(item)
))

/*
4. Используя тот же метод (из 4-го пункта), вывести в консоль все имена людей (свойство name) 
*/
console.log(people.forEach((item,index,arr) =>
console.log(item.name)
))


/*
5. Используя наиболее удобный для этого метод создать новый массив - minorPeople, на основе массива people, 
который будет хранить в себе только несовершеннолетних людей. (Младше 18 лет). 
*/

let arr = people.filter(item => item.age < 18) 

console.log(arr)

/*
6. Используя тот же метод (из 6-го пункта) создать новый массив -  oldPeople`,
 на основе массива people, в котором будут люди только от 50 лет.
*/

let oldPeople = people.filter(item => item.age > 50)

console.log(oldPeople)

/*
7.  Используя наиболее удобный для этого метод создайте новый массив - futurePeople , на основе массива people,
 однако возраст у каждого из них должен увеличиться на 30 лет.
*/

let futurePeople = people.map(item => {
item.age += 30
console.log(item)
}) 

/* 
8.  Используя тот же метод (из 8-го пункта), создайте новый массив - deadPeople, на основе массива futurePeople,
 в котором к людям, чей возраст превышает 100 лет,
 должно добавиться еще одно свойство isDead со значением true, а к остальным, со значением false.
*/
const deadPeople = people.map(item => {
   if (item.age > 100) {
     item.isDead = true;
     console.log(item)
   } else {
     item.isDead = false;
     console.log(item)
   }
 })



/*
9. Посчитайте средний возраст людей из массива `people`. Для этого используйте наиболее удобный метод.
 Cредний возраст рассчитывается по формуле:
 `сумма всех возрастов / кол-во людей`.  
*/
console.log(people.reduce((sum,item)=>{
   return (sum+item.age)/item.name.length
},0))