function generateMainDiv(){
    const categoryList = getCategoryData();
    const itemByCategory = arrangeItemsByCategory(categoryList);
    console.log(itemByCategory);
    createAllDivs(itemByCategory);
}

generateMainDiv();

function getCategoryData() {
    const categoryList = [{
        "id": "blue",
        "name": "Blue",
        "category": "COLOR"
    }, {
        "id": "lion",
        "name": "Lion",
        "category": "ANIMAL"
    }, {
        "id": "dog",
        "name": "Dog",
        "category": "ANIMAL"
    }, {
        "id": "red",
        "name": "Red",
        "category": "COLOR"
    }, {
        "id": "yellow",
        "name": "Yellow",
        "category": "COLOR"
    }, {
        "id": "cat",
        "name": "Cat",
        "category": "ANIMAL"
    }, {
        "id": "banana",
        "name": "Banana",
        "category": "FRUIT"
    }, {
        "id": "tata",
        "name": "Tata",
        "category": "CAR"
    }, {
        "id": "honda",
        "name": "Honda",
        "category": "CAR"
    }, {
        "id": "green",
        "name": "Green",
        "category": "COLOR"
    }, {
        "id": "maruti",
        "name": "Maruti",
        "category": "CAR"
    }, {
        "id": "mango",
        "name": "Mango",
        "category": "FRUIT"
    }, {
        "id": "orange",
        "name": "Orange",
        "category": "FRUIT"
    }, {
        "id": "litchi",
        "name": "Litchi",
        "category": "FRUIT"
    }, {
        "id": "kia",
        "name": "Kia",
        "category": "CAR"
    }, {
        "id": "elephant",
        "name": "Elephant",
        "category": "ANIMAL"
    },];

    return categoryList;
}

function arrangeItemsByCategory(itemList) {
    const itemByCategory = {};
    itemList.forEach(item => {
        if (itemByCategory.hasOwnProperty(item.category)) {
            itemByCategory[item.category].push(item);
        }
        else {
            itemByCategory[item.category] = [item];
        }    
    });

    return itemByCategory;
}

function createDiv(category, items){
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('category');
    const h2 = document.createElement('h2');
    h2.textContent = category;
    parentDiv.append(h2);
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        const h3 = document.createElement('h3');
        h3.textContent = item.name;
        div.append(h3);
        parentDiv.append(div);
    });
    const mainDiv = document.getElementById('main-div');
    mainDiv.append(parentDiv);
}

function createAllDivs(itemByCategory) {
    const objArray = Object.entries(itemByCategory);
    for (const [category, itemList] of objArray) {
        createDiv(category, itemList);
    }
}







