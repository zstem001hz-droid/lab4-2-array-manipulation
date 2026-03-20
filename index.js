// Shopping list array
let shoppingList = [];
// Add item to end of array - push()
function addItem(item) {
    shoppingList.push(item);

    console.log(item + " added to the list.");
}

// TEST addItem
addItem("Apples");
addItem("Cracker Jacks");
addItem("Organic Beets");
console.log(shoppingList);

// Remove items from list
function removeLastItem() {

    // If list is empty
    if (shoppingList.length === 0) {
        console.log("List is empty. Nothing to remove.");
        return;
    }

    // .pop() removes last item from list
    let removed = shoppingList.pop();
    console.log(removed + " removed from the list.");
}

// TEST remove items
removeLastItem();
console.log(shoppingList); // Beets removed from list

addItem("wholefish");

function displayList() {

    // Checkif the list is empty
    if (shoppingList.length === 0) {
        console.log("List is empty.");
        return;
    }
    console.log("Shopping List:");

    //Loop through the list
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(shoppingList[i])
    }
}
