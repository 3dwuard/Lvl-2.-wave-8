// First Array to hold our items (each item= {name,price, bought})
let items = [];
// Second, get Dom elements
const itemName = document.getElementById(`itemName`);
const itemPrice = document.getElementById(`itemPrice`);
const addBtn = document.getElementById(`addBtn`);
const list = document.getElementById(`list`);
const showPending = document.getElementById(`showPending`);
const showAll = document.getElementById(`showAll`);
const totalDisplay = document.getElementById(`total`);
// Task id= Using Arrow function, arrow function to add new items.
addBtn.addEventListener(`click`, () => {
    const name = itemName.value.trim();
    const price = parseFloat(itemPrice.value);

    if (!name || isNaN(price) || price <= 0 ){
        alert(`Price enter valid name and price`);
        return;
    }
    // add new item bodject
    items.push({name, price, bought: false});
    // Clear inputs
    itemName.value = ``;
    itemPrice.value =``;
    // Update the display
    //renderList(items);

// Task 2: Render List
//renderList(items);
});
// Task 3 Toggle Bought Status (using map); we need to mark an item as bought. But we have to update the original items array.
// event delegation for toggle buttons
list.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`toggle-btn`)) {
        const name = e.target.getAttribute(`data-name`);

        // Use map to create a new array with toggled item
        items = items.map(item =>
            item.name === name
            ? { ...item, bought: !item.bought}
            :item
        );
        // Re-render with current filter
        renderList(items);
    }

// show only pending items (filter)
showPending.addEventListener(`click`, () => {
    const pendingItems = items.filter(item => !item.bought);
    renderList(pending);
})
// Show all items
showAll,addEventListener(`click`, () => {
    renderList(items);
})
console.log(`Item added`, name, price);
console.log(`All items now:`, items);
});

const mainTitleEl = document.querySelector("#mainTitle");
const description = document.getElementById("description");
const itemList = document.getElementById("itemList");
const mainCardEl = document.getElementById("mainCard");

console.log(mainTitleEl);
console.log(description);
console.log(itemList);

mainTitleEl.textContent = "DOM practice - update by JS";
description.textContent = "This Card was updated using JavaScript.";
mainTitleEl.style.color = "red";
mainCardEl.style.backgroundColor = "rgba(255, 255, 255, 0.41)";
mainCardEl.classList.add("highlight-card");

const newListItem = document.createElement("li");
newListItem.textContent = "Item 4";
itemList.appendChild(newListItem);

const oneItem = itemList.querySelector("li");
oneItem.remove();

const itemArray = itemList.querySelectorAll("li");
const itemFour = itemArray["2"];

itemFour.classList.add("item");

