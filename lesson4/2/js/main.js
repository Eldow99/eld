// let s = prompt("stroka");
// let l = prompt("bukva");
//   function checkarg (s,l){
//     s.split([','[ l]])

        
//         alert(char)
//         alert((l) )
    

//     }


// let n = +prompt('VVedite 4islo')
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert(factorial(n))



let num1 = +prompt('Enter num1');
let num2 = +prompt('Enter num2');

function diapazone(x,y){
    let arr = [];
    if(x>y) for(let i = x; i <=y; i++)arr.push(i)

    else for(i=x;i >= y; i--)arr.push(i)
    return arr.join();
}
console.log(diapazone(num1,num2))