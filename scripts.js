const pubs = ["Kneipe 1", "Kneipe 2", "Kneipe 3", "Kneipe 4", "Kneipe 5", "Kneipe 6", "Kneipe 7", "Kneipe 8", "Kneipe 9", "Kneipe 10"];
const drinks = ["Getränk 1", "Getränk 2", "Getränk 3", "Getränk 4", "Getränk 5", "Getränk 6", "Getränk 7", "Getränk 8", "Getränk 9", "Getränk 10"];
let usedPubs = [];
let usedDrinks = [];

function getRandomItem(items, usedItems) {
    const availableItems = items.filter(item => !usedItems.includes(item));
    if (availableItems.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const selectedItem = availableItems[randomIndex];
    usedItems.push(selectedItem);
    return selectedItem;
}

function spinWheel(wheelId) {
    const wheel = document.getElementById(wheelId).querySelector('.wheel-inner');
    wheel.style.transition = 'none';
    wheel.style.transform = `rotate(0deg)`;
    
    setTimeout(() => {
        const randomDegree = Math.floor(Math.random() * 360) + 3600; // Random degree + multiple full rotations
        wheel.style.transition = 'transform 10s cubic-bezier(0.33, 1, 0.68, 1)';
        wheel.style.transform = `rotate(${randomDegree}deg)`;
    }, 50);

    setTimeout(() => {
        let result;
        if (wheelId === 'wheel1') {
            result = getRandomItem(pubs, usedPubs);
        } else if (wheelId === 'wheel2') {
            result = getRandomItem(drinks, usedDrinks);
        }

        if (result) {
            alert(`Das Rad hat ausgewählt: ${result}`);
        } else {
            alert('Keine Auswahlmöglichkeiten mehr verfügbar');
        }
    }, 10500);
}
