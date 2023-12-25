// function getUnique(arr){
//     let unique = [];
//     arr.forEach(element => {
//         if(!unique.includes(element)){
//             unique.push(element);
//         }
//     });
//     return unique;
// }

function getUnique(arr){
    let unique = [];
    for(let i=0; i<arr.length; i++){
        let found = false;
        for(let j=0; j<unique.length; j++){
            if(arr[i] === unique[j]){
                found = true;
                break;
            }
        }
        if(!found) unique.push(arr[i]);
    }
    return unique;
}

let arr = [1, 2, 2, 3, 1, 4, 7, 4, 9, 6, 3];
console.log(getUnique(arr));