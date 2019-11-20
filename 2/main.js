alert('Inserisci due parole in successione ti dirò qual è la più lunga')
var word1 = prompt('Inserisci il primo numero');
var word2 = prompt('Inserisci il secondo numero');

var words = [];
words.push(word1);
words.push(word2);

words.sort(function(a,b){b.length - a.length})
console.log(words);
