function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calculateAndDisplay() {
    const side1 = 6, side2 = 7, side3 = 8;
    const area = calculateTriangleArea(side1, side2, side3);
    document.getElementById('result').textContent = area.toFixed(14);
}