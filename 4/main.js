var invitati = ['Leonardo Di Caprio', 'Sylvester Stallone', 'Jhonny Depp','Brad Pitt','Will Smith'];
var invitato = 'Pinco Pallino';
var flag = false;

for (var i = 0; i <  invitati.length; i++) {

    if (invitato.toLowerCase() == invitati[i].toLowerCase()) {
        flag = true;
    }

}

if (flag == true) {
    console.log('Benvenuto ' + invitato);
} else {
    console.log('Non puoi entrare sig ' + invitato + ' non sei nella lista!');
}
