let car = {
    model: 'Toyota',
    make: 'Estima',
    year: 2016,
    price: 50000
}
function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
        console.log(key, obj[key]);

    }
}

showProperties(car);
