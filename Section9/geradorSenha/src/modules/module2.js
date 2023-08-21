function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomLetter(isLower) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    if (isLower) return randomLetter.toLowerCase();
    return randomLetter;
}

function generateRandomSymbol() {
    const symbols = '!@#$%^&*()_+{}[]:;"\'<>,.?/~`|-\\';
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const randomSymbol = symbols[randomIndex];
    return randomSymbol;
}


export { randNum, generateRandomLetter, generateRandomSymbol };