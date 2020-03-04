
let a = prompt("Text or sth word");
    const arr = [];
    for ( let x= 0; x <= a.length; x++){
      for ( let y = x +1 ; y <= a.length; y++){
        arr.push(a.slice(x,y))

      }
    
    }   
    console.log(arr)

