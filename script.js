


const menuItems = [
    {
        name: "Hyderabadi Biryani",
        image: "images/hy.jfif",
        category: "desi",
        description: "Aromatic and flavorful biryani with tender chicken and spices."
    },
    {
        name: "Vegetable Biryani",
        image: "images/hy6.jfif",
        category: "chinese",
        description: "Delicious biryani made with mixed vegetables and fragrant basmati rice."
    },
    {
        name: "Chicken 65",
        image: "images/hy5.jpg",
        category: "chinese",
        description: "Spicy and crispy fried chicken pieces."
    },
    {
        name: "Paneer Tikka",
        image: "images/hy1.jfif",
        category: "chinese",
        description: "Marinated paneer cubes grilled to perfection."
    },
    {
        name: "Mutton Biryani",
        image: "images/hy2.jfif",
        category: "Biryani",
        description: "Succulent pieces of mutton cooked with aromatic spices and basmati rice."
    },
    {
        name: "Gulab Jamun",
        image: "images/hy3.jfif",
        category: "Biryani",
        description: "Soft and spongy milk-based dessert soaked in sugar syrup."
    },
    {
        name: "Raita",
        image: "images/hy4.jfif",
        category: "Biryani",
        description: "Cooling yogurt-based side dish with cucumber and spices."
    },
    {
        name: "Hyderabadi Biryani",
        image: "images/hy.jfif",
        category: "desi",
        description: "Aromatic and flavorful biryani with tender chicken and spices."
    },
    {
        name: "Vegetable Biryani",
        image: "images/hy6.jfif",
        category: "chinese",
        description: "Delicious biryani made with mixed vegetables and fragrant basmati rice."
    },
    {
        name: "Chicken 65",
        image: "images/hy5.jpg",
        category: "chinese",
        description: "Spicy and crispy fried chicken pieces."
    },
    {
        name: "Paneer Tikka",
        image: "images/hy1.jfif",
        category: "chinese",
        description: "Marinated paneer cubes grilled to perfection."
    },
    {
        name: "Mutton Biryani",
        image: "images/hy2.jfif",
        category: "Biryani",
        description: "Succulent pieces of mutton cooked with aromatic spices and basmati rice."
    },
    {
        name: "Gulab Jamun",
        image: "images/hy3.jfif",
        category: "Biryani",
        description: "Soft and spongy milk-based dessert soaked in sugar syrup."
    },
    {
        name: "Raita",
        image: "images/hy4.jfif",
        category: "Biryani",
        description: "Cooling yogurt-based side dish with cucumber and spices."
    }
];



function displayMenu(items) {
    const menuSection = document.getElementById('menu');
    menuSection.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="missing"/>
            <p>${item.description}</p>
        `;
        
        menuSection.appendChild(menuItem);
    });
}

function filterMenu(category) {
    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}

// Display all items on initial load
displayMenu(menuItems);
