
//-------------APPROACH 1-------------
// function getCommon(arr1, arr2){
//     let common = [];
//     arr1.forEach(element => {
//         if(arr2.includes(element)){
//             common.push(element);
//         }
//     })

//     return common;
// }

//-------------APPROACH 2-------------
function getCommon(arr1, arr2){
    let common = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                // if(!common.includes(arr1[i])) common.push(arr1[i]); //To prevent repitition of elements
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

let arr1 = [34, 56, 12, 89, 45, 90];
let arr2 = [32, 12, 23, 34, 98, 9, 45];

console.log(getCommon(arr1, arr2));