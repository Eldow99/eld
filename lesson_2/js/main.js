//  запись нескольких переменных после единственного объявления 

//console.log(firstName)   
//var firstName = 'JACK';

 //Отличия var and let
 //var хойстится let не хойстится
//conslo.log(firstName);//undefined
//var firstName = 'Jack';
//console.log(firstName);
//let firstName = 'Jack';

//объявленин 2х переменных
// var firstName = 'Jack'
// var firstName = 'John'
//output john
// console.log(firstName)
// let firstName = 'Jack'
// let firstName = 'John'    // error
// console.log(firstName);

// var записывается в глобвльный объект window
// var firstName = 'Jack';
// console.log(window.firstName)


//let не записывается в глобвльный объект window
// let firstName = 'Jack';
// console.log(window.firstName)

// переменная объявлега через const унаследовада 
// все принципы который свойственны переменой let,
//  НО  не большими Отличиями///

//перезначение let возиожно
// let firstName = 'Jack'
// console.log(firstName);
// let firstName = 'John'
// console.log(firstName);


// перезначение const  невозможно
// const firstName = 'Jack'
// firstName = 'John'
// console.log(firstName);

//            обьекты
// const person = {
//     name : 'Jack',
//     age :20,
//     childs : ['John','Luci']
// }
//ne standartnye ispolzovanie keys
// cont notStandardFields = {
//     'kebab- case': 'i can use it : D',
//     '0' : 10

// }
// dostup k notStandardFields svoistvam
// console.log(person.name)
// console.log(notStandardFields)

//dostup object
// console.log(personNnme)

// pereznachenie svoistv daje esli eto const
// person.name = 'John';
// console.log(person)
// dobavlemie svoistv izvne
// person.weight = '80kg'
// console.log(person)

//udalenie polya iz obj
//delete person.name;
// console.log(person)


//massivy



//cikly
//for
// for(let = i ; i <= 10;i++){
//     console.log('Iteraciya ' + i) 
// }
//  const arrNums = [1,2,3,4,5];

// for(let i = 0;i < arrNums.length ; i++){
//     console.log(arrNums[i] *2)
// }

// poisk elementa v massive ciklom c usloviem
// let value = null;
// for(let i = 0; i < arrNums.length; i++){
//     console.log(arrNums[i])
//     if(arrNums[i] === 4 ) 
//     {value = arrNums[i];
// }console.log(value);
// }

// vytaskivaem elementy bolwe 3x
// const arrNums2 = [i];
// for(let i = 0; i < arrNums.length; i++){
//     if(arrNums[i] > 3 ) arrNums2.push(arrNums[i]);
// }
//         console.log(arrNums2);

//         //while
//         let i =0;
//         while(i < 10){
//             console.log('Iteraciya' + i++)

//         }

//Do while
// let i = 0;
// do {
//     console.log('Iteraciya ' + i++);
// }while(i < 10);

// Metoda massiva stage 1
const someFamilya = [
    {name: 'March',
    position: 'MJTHER',
    AGE : 36
},
{
name: 'Homer',
position: 'Father',
AGE : 40
},
{  name: 'Bart',
position: 'Son',
AGE : 10
},{
name: 'LISA',
position: 'DAUGHTER',
AGE : 8
}
];

// Method Push / pop
const newChild = {
    name: 'Maggie',
    position: 'Daughter',
    age: 2


 }
// someFamilya.push(newChild);
// someFamilya.pop();
// console.log(someFamilya)

//method shift / unshift
// someFamilya.shift(newChild);
// console.log(someFamilya);

//method splice 
// someFamilya.splice(1,1) // udalenie
// console.log(someFamilya);

// someFamilya.splice(2,0, newChild)// dobavlenie
// console.log(someFamilya)


// splice sobrat samostoyatelno method slice
//jizn bez methoda for each
// const simpsonsFamiliya = [];
// for (let i = 0; i < someFamilya.length;i++){
//     someFamilya[i].lastName = 'Simpson';
//     simpsonsFamiliya.push(someFamilya[i]);

// }
// console.log(simpsonsFamiliya);
//jizn s metodom for each
// someFamilya.forEach(function(item){
//     item.lastName = 'Simspon';  
//     simpsonsFamiliya.push(item);
// })
//     console.log(simpsonsFamiliya)


    //jizn  s  method map
    const simpsonsFamiliya = someFamilya.map(function(item){
        item.lastName = 'Simpson';
        return item;
});
console.log(simpsonsFamiliya);