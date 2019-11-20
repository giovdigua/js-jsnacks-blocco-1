alert('Inserisci due numeri ti dirò qual è il maggiore')
var number1 = parseInt(prompt('Inserisci il primo numero'));
var number2 = parseInt(prompt('Inserisci il secondo numero'));

if (number1 > number2) {
    alert(' il numero maggiore è ' + number1);
} else if (number1 < number2){
    alert(' il numero maggiore è ' + number2);
}else{
    alert('I numeri sono uguali');
}
