var numeroutente = prompt('Inserisci un numro di 4 cifre');
var somma = 0;
for (var i = 0; i < numeroutente.length; i++) {
    somma+=parseInt(numeroutente[i]);

}

console.log(somma);
