function updateColor() {
    const colorBox = document.getElementById('colorBox');
    const colorInput = document.getElementById('colorInput');
    const color = colorInput.value;
    colorBox.style.backgroundColor = color;
}