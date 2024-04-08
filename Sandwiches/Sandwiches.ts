let items1 : string []=["Chicken","Egg","Breed"]
let sandwich : string []=[];

console.log("\nFirst Order items ")
add_items(items1);


let items3 : string []=["Tomato","Cucumber","Carrots","Onions","Spinach","Beetroot","Potatoes"]

console.log("\nFirst and Second Order's items")
add_items(items3);

let items2 : string []=["mayo","Cheese","Tomato Sauce","Green Chutney","poneer"]

console.log("\nFirst, Second and Third Order's items  ")
add_items(items2);

function add_items(itm : string[]) {

    for (let value in itm)
    sandwich.push(itm[value]); 

    for (let x in sandwich)
console.log(sandwich[x]); 

}