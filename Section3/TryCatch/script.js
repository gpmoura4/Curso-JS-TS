function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(100, 100));
    console.log(soma(100, 'pendrex'));
} catch (error) {
    console.log(error);
    console.log('Houve um erro.');
}