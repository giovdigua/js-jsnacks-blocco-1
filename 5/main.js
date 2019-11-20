var arrayNumerico = [];

for (var i = 0; i < 6; i++) {
        var temp = parseInt(prompt('Inserisci il '+ (i+1) + ' numero'));
        if (temp%2 != 0) {
            arrayNumerico.push(temp);
        }
}

console.log(arrayNumerico);
