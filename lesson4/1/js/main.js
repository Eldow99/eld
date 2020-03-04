let arr = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
    
    ]

    // for(let i =0; i < arr.length; i++){
    //     for(let j = 0;j<arr[i].length;j++){
    //         console.log (arr[i][j])
    //     }
    // }
  
    for(let i = 0 ; i < arr.length; i++){
        // console.log(arr[i][i]);
        console.log(arr[i][arr[i].length-(i+1)])
    }
    
