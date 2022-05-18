//==================Exercise #1 ==========//
/* Write a function that takes in the string and the list of dog names
 loop through the list and check that the current name is in the string passed in. 
 The output should be:
 "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// function findWords(){
//     let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
//     if (dog_string.includes("Max","HAS","PuRple","dog")) {
//         return "Matched";
//     } else {
//         return "No Matches"
//     };
        

// };
// console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+=2) {
        if (arr[i] !== 'even index') {
            arr[i] = 'even index'
        }; 
    }
        return arr
 };

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
