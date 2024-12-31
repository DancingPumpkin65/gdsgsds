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

console.log(estPair(4));
console.log(estPair(7));

// exo 15
function compteVoyelles(chaine) {
    const correspondances = chaine.match(/[aeiouyAEIOUY]/g);
    return correspondances ? correspondances.length : 0;
}

// exo 16
function trierTableau(tableau) {
    return tableau.sort((a, b) => a - b); 
}

// exo 17
function factorielle(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorielle(n - 1);
}

// exo 18 
function estPremier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function trouverNombresPremiers(tableau) {
    return tableau.filter(estPremier); 
} 

const nombress = [10, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19, 20, 23, 25, 29];
const nombresPremiers = trouverNombresPremiers(nombress);
console.log(nombresPremiers);
console.log()

const tab1 = [10, 2, 3, 4, 5];
const tab2 = [10, 2, 3, 4, 5];

function fusionerTableaux(t1, t2) {
    return t1.join(t2);
}
