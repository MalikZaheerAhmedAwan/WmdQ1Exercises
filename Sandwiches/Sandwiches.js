var items1 = ["Chicken", "Egg", "Breed"];
var sandwich = [];
console.log("\nFirst Order items ");
add_items(items1);
var items3 = ["Tomato", "Cucumber", "Carrots", "Onions", "Spinach", "Beetroot", "Potatoes"];
console.log("\nFirst and Second Order's items");
add_items(items3);
var items2 = ["mayo", "Cheese", "Tomato Sauce", "Green Chutney", "poneer"];
console.log("\nFirst, Second and Third Order's items  ");
add_items(items2);
function add_items(itm) {
    for (var value in itm)
        sandwich.push(itm[value]);
    for (var x in sandwich)
        console.log(sandwich[x]);
}
