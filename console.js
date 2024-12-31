console.log('HI')

const personne = {
    nom: 'Alice',
    age: 25,
    ville: 'Paris'
  };
  
console.log(personne);

const bouton = document.getElementById('Bouton');

bouton.addEventListener('click', function() {
    console.log('le bouton a ete clique');
});

function inverseChaine(chaine) {
    return chaine.split('').reverse().join('');
}

const resultat = inverseChaine('bonjour');
console.log(resultat); 

const nombres = [3, 7, 2, 9, 15, 4, 11];
function trouverMax(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

const max1 = trouverMax(nombres);
console.log( max1); 

function estPair(nombre) {
    (nombre % 2 === 0) ? 'pair' : 'impair';
}
