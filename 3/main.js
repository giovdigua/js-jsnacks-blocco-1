var sommaWhile = 0;
var sommaFor = 0;
var addendo;
var count = 1
while (count <= 5) {
    addendo = parseInt(prompt('Immetti il '+ count+'° numero'));
    sommaWhile = sommaWhile + addendo;
    count++;
}
alert('La somma dei numeri inseriti calcolati con il ciclo while è uguale a '+ sommaWhile);

for (var i = 1; i <= 5; i++) {
    addendo = parseInt(prompt('Immetti il '+ i +'° numero'));
    sommaFor = sommaFor + addendo;
}
parseInt()
alert('La somma dei numeri inseriti calcolati con il ciclo for è uguale a '+ sommaFor);
