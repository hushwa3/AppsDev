function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function createRandomDivs() {
    const container = document.getElementById('divContainer');
    container.innerHTML = ''; // Clear previous divs

    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div');
        
        // Random width and height between 20px and 100px
        const width = getRandomNumber(20, 100);
        const height = getRandomNumber(20, 100);
        
        // Random position (absolute)
        const left = getRandomNumber(0, container.offsetWidth - width);
        const top = getRandomNumber(0, container.offsetHeight - height);
        
        // Random border radius between 1px and 20px
        const borderRadius = getRandomNumber(1, 20);
        
        // Random border width between 1px and 20px
        const borderWidth = getRandomNumber(1, 20);
        
        // Apply styles
        div.className = 'random-div';
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.backgroundColor = getRandomColor();
        div.style.color = getRandomColor();
        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        div.style.borderRadius = `${borderRadius}px`;
        div.style.borderColor = getRandomColor();
        div.style.borderWidth = `${borderWidth}px`;
        div.style.borderStyle = 'solid';
        div.style.fontFamily = ['Arial', 'Verdana', 'Times New Roman', 'Courier', 'Georgia'][getRandomNumber(0, 4)];
        
        // Add "div" text
        div.textContent = 'div';
        
        container.appendChild(div);
    }
}