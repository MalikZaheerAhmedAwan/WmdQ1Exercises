let places: string[]=["NORTHEN AREA OF PAKISTAN","SAUDIA", "DUBAI","TURKEY","LONDON"];

for (let x=0;x<places.length;x++)
console.log(x+1+" - "+places[x]);

console.log("\nOriginal Order\n");
places.forEach(function (value) {console.log(value)}); 

console.log("\n\nPrint in Alphabetical order");
let sortedplaces=ToSort(places); 
sortedplaces.forEach(function (value) {console.log(value)}); 

console.log("\nPrint to view Actual order After sorting \n");
places.forEach(function (value) {console.log(value)}); 

console.log("\n\nPrint in Reverse Alphabetical order");
sortedplaces=ToReverse(places); 
sortedplaces.forEach(function (value) {console.log(value)}); 

console.log("\nPrint to view Actual order after reverse\n");
places.forEach(function (value) {console.log(value)}); 

places.reverse();
console.log("\nPrint to view order after reverse\n");
places.forEach(function (value) {console.log(value)}); 

places.reverse();
console.log("\nPrint to view order after again reverse to its original order\n");
places.forEach(function (value) {console.log(value)}); 

places.sort();
console.log("\nPrint to view order after sorting the list\n");
places.forEach(function (value) {console.log(value)}); 

places.reverse();
console.log("\nPrint to view order after sorting the list\n");
places.forEach(function (value) {console.log(value)}); 

function ToSort(value) {
    let sa=  value.map(function (value) {
        return value;});
sa.sort();
return sa;
}
function ToReverse(value) {
    let ro=  value.map(function (value) {
        return value;});
ro.sort();
ro.reverse();
return ro;
}