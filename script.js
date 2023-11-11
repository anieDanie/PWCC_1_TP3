/**
 * TP3
 * Dernière mise-à-jour : 11-11-2023 (16:08)
 * EXO 1 et 2 : terminés
 * Travail sur fonctions pour manipuler les listes d'objets (contiennent doublons) en cours
 */

// DONNÉES

// Les villes

const cities = [

    {"name": "Montreal", "population": 1762949, "country": "Canada"},
    {"name": "Toronto", "population": 2794356, "country": "Canada"},
    {"name": "Vancouver", "population": 662248, "country": "Canada"},

    
    {"name": "Bogota", "population": 8034649, "country": "Colombie"},
    {"name": "Medellin", "population": 8034649, "country": "Colombie"},

    
    {"name": "Alger", "population": 3154792, "country": "Algerie"},
    {"name": "Oran", "population": 803329, "country": "Algerie"},

    {"name": "Mexico", "population": 9209944, "country": "Mexique"}
]
//console.log(cities)
//console.log(cities[0])
//console.log(cities[0].name)

// Les personnes

const persons = [
    {"name": "Maurice Vachon", "city": "Montreal"},
    {"name": "Jane Munro", "city": "Vancouver"},
    {"name": "Eckhart Tolle", "city": "Vancouver"},
    {"name": "Ingrid Betancourt", "city": "Bogota"},
    {"name": "DJ Pope", "city": "Medellin"},
    {"name": "Djaffar Bensetti", "city": "Oran"}   

]

// VUE

// 1 - Linker un script extérieur
document.querySelector('#main-title').innerHTML = 'Travail Pratique III'

// 2 - Sum de tous les nombres de 1 à n
document.getElementById('button-1').addEventListener('click', exo2);

function getMessageForExo2(input){
    // bloc de validation de la valeur saisie: un entier naturel (n ­­>= 0)
    if(isNaturalNumber(input)){
        return '' + sumOfFiniteSequenceOfTerms(Number(input));
    }
    return 'Entrée invalide';
}

function exo2(){
    const input = document.getElementById('input-1').value;
    document.getElementById('result-box-1').innerHTML = getMessageForExo2(input);
}
// TESTS UNITAIRES INTERFACE
// 3        -> 6
// 10       -> 55
// 0        -> 0 (condition: entier naturel)
// 'allo'   -> entrée invalide
// -12      -> entrée invalide


// 3 - Sum de tous les nombres de 1 à n qui sont divisibles par k
document.getElementById('button-2').addEventListener('click', exo3);

function getMessageForExo3(input1, input2){
    // bloc de validation des valeurs saisies: deux entiers strictement positifs (n ­­> 0)
    if(isPositiveInteger(input1) && isPositiveInteger(input2)){
        return '' + sumOfMultiplesInFiniteSequenceOfTerms(Number(input2), Number(input1), divides);
    } 
    return 'Entrée invalide';
}

function exo3(){
    const input1 = document.getElementById('input-1').value;
    const input2 = document.getElementById('input-2').value;

    document.getElementById('result-box-2').innerHTML = getMessageForExo3(input1, input2);
}
// TESTS UNITAIRES INTERFACE
// 1 et 3       -> 6
// 2  et 10     -> 30
// allo et 10   -> Entrée invalide
//-12 et 10     -> Entrée invalide
//10 et allo    -> Entrée invalide
//12 et -10     -> Entrée invalide

// 4 - Pays d'une ville

document.getElementById('button-3').addEventListener('click', exo4);

function getMessageForExo4(input){
    console.log(input)

    // Valider qu'il s'agit d'une chaîne de caractère ou une chaîne de caractères vide
    if(containsOnlyLetters(input)){
        console.log('dans le if')
    }

    // fonction pour rechercher dans la liste des villes: par ville
    // retourne le pays
}

function exo4(){
    console.log('exo4')
    const input = document.getElementById('input-3').value;
    document.getElementById('result-box-3').innerHTML = getMessageForExo4(input);
}
// TESTS UNITAIRES INTERFACE


// 5 - Nombre de villes d'un pays

// 6 - Population d'un pays

// 7 - Plus grande ville d'un pays

// 8 - Pays d'origine

// 9 - Nombre de personnes dans un pays


// FONCTIONS pour logique application

// OPÉRATIONS SUR DES NOMBRES
/**
 * Valide si une chaîne de caractères est une valeur numérique.
 * Prend en paramètre une chaîne de caractères. Retourne un booléen.
 */
function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }

/**
 * Valide si une chaîne de caractères est un entier naturel (n>=0).
 * Prend en paramètre une chaîne de caractères. Retourne un booléen.
 */
function isNaturalNumber(str){
    return isNumeric(str) && Number.isInteger(Number(str)) && Number(str)>=0;
}
//console.log(isNaturalNumber('allo')); // false
//console.log(isNaturalNumber(3.5)); // false
//console.log(isNaturalNumber(-12)); // false
//console.log(isNaturalNumber(3)); // true
//console.log(isNaturalNumber(0)); // true


/**
 * Valide si une chaîne de caractères est un nombre supérieur à 0.
 * Prend en paramètre une chaîne de caractères. Retourne un booléen
 */
function isPositiveInteger(str){
    return isNumeric(str) && Number.isInteger(Number(str)) && Number(str)> 0;
}
//console.log(isPositiveInteger('allo')); // false
//console.log(isPositiveInteger(3.5)); // false
//console.log(isPositiveInteger(-12)); // false
//console.log(isPositiveInteger(3)); // true
//console.log(isPositiveInteger(0)); // false

/**
 * Valide si un nombre est un diviseur d'un autre nombre à partir du reste
 * d'une division entière.
 * Prend en paramètre 2 nombres. Retourne un booléen
 * Nota: cette fonction ne contrôle pas la division par 0 ni le fait que le module
 * doit être entre 0 et (divisor-1). 
 */
function divides(divisor, dividend){
    //console.log(dividend % divisor);
    return dividend % divisor === 0;
}
//console.log(divides(1,3)); // affiche true
//console.log(divides(1,-3)); // affiche true : reste = -0
//console.log(divides(-1,3)); // affiche true : reste = 0

//console.log(divides(4,13)); // affiche false
//console.log(divides(0,13)); // affiche false : division par 0 - NaN
//console.log(divides(4,0)); // affiche true

// l'opérateur % ne donne pas le résultat d'une opération modulo sur des valeurs
// négatives (ne tient pas compte du signe de la valeur)

// 5 mod 12 = 5
//console.log(divides(12,5)); // affiche false : reste = 5

// -5 mod 12 = -7
//console.log(divides(12,-5)); // affiche false : reste = -5 (ne donne pas classe d'équivalence de mod12)

/**
 * Calcule la somme d'une suite de termes (suite finie) qui se termine
 * avec un entier N.
 * Prend en paramètre une valeur numérique entière (type Number, validé par Number.isInteger()),
 * Retourne la somme (type Number)
 * NOTA: somme vide est définie par 0
 */
function sumOfFiniteSequenceOfTerms(n){
    if(n > 0){
        return n + sumOfFiniteSequenceOfTerms(n-1);
        //3+2+1
    } else {
        return n
    }
}
//console.log(sumOfFiniteSequenceOfTerms(3)); // Affiche 6
//console.log(sumOfFiniteSequenceOfTerms(10)); // Affiche 55
//console.log(sumOfFiniteSequenceOfTerms(0)); // Affiche 0
//console.log(sumOfFiniteSequenceOfTerms(-12)); // Affiche -12 (directement dans le else)


/**
 * calcule la somme des multiples d'un entier, qui sont des termes
 * contenus dans une suite finie qui se termine avec un entier N. 
 * Prend en paramètre l'entier N qui définit la séquence de termes,
 * le diviseur commun des termes et une fonction pour sélectionner
 * les multiples.
 * retourne une valeur numérique(type Number)
 * */
function sumOfMultiplesInFiniteSequenceOfTerms(n, d, selectFunc){
    //console.log('sumOfTerms')
    //console.log(n);
    //console.log(d);
    //console.log(selectFunc);

    let s = 0;

    for (let i = 0; i <= n; i++){
        if(divides(d,i)){
            s += i;
        }
    }
    return s;
}
//console.log(sumOfMultiplesInFiniteSequenceOfTerms(3,1, divides)) // affiche 6
//console.log(sumOfMultiplesInFiniteSequenceOfTerms(10,2, divides)) // affiche 30
//console.log(sumOfMultiplesInFiniteSequenceOfTerms(-12,10, divides)) // affiche 0 (on entre pas dans la boucle for)
//console.log(sumOfMultiplesInFiniteSequenceOfTerms(12,-10, divides)) // affiche 10 (seulement 10 est divisible par -10)


// OPÉRATIONS SUR DES CHAÎNES DE CARACTÈRES

/**
 * Valide si une chaîne de caractères ne contient que des caractères qui forment des mots.
 * Prend une chaîne de caractères en paramètre. Retourne un booléen.
 */
function containsOnlyLetters(s){
    // regex pour mot français : lettres françaises (Min, Maj), tiret, espaces blancs
    return /^[a-zA-ZÀ-ÿ-. ]*$/.test(s);
}



function searchByProperty(list, propertyName, element){
    console.log(element)

    for (obj of Object.values(list)){
        console.log(obj)
        if(obj[propertyName] === element){
            
            console.log('oui!') // string
        }
    }
}
//searchByProperty(cities, 'name', 'Oran'); // 1 enregistrement : indice 6
//searchByProperty(cities, 'population', 8034649); // 2 enregistrements : indices 3 et 4
//searchByProperty(cities, 'country', 'Canada'); // 3 enregistrements : indices 0,1,2
//searchByProperty(persons, 'name', 'DJ Pope'); // 1 enregistrement : indice 4
//searchByProperty(persons, 'city', 'Vancouver') // 2 enregistrements: indices 1 et 2

/**
 * Récupère les indices des enregistrements (objets) qui correspondent
 * aux critères de recherche spécifiés.
 * Prend en paramètre une liste d'enregistrements, la propriété sur laquelle
 * il faut effectuer la rechercher et l'élément recherché.
 * À noter: le type de la donnée l'élément recherché(passé en paramètre) doit correspondre 
 * au type spécifié dans la base de données.
 * Retourne une liste qui contient les indices des enregistrements (objets) qui rencontrent
 * les critères de recherche
 */
function getAllMatchingRecords(list, propertyName, searchedElement){
    console.log(searchedElement)

    let indexList = [];

    for (arr of Object.entries(list)){
        //console.log(arr)
        if(arr[1][propertyName] === searchedElement){            
            //console.log('oui!') // string
            indexList.push(Number(arr[0]))
            //console.log(indexList)
        }
    }
    return indexList;
}
console.log(getAllMatchingRecords(cities, 'name', 'Oran')); // affiche Array [ 6 ]
console.log(getAllMatchingRecords(cities, 'population', 8034649)); // affiche Array [ 3, 4 ]
console.log(getAllMatchingRecords(cities, 'country', 'Canada')); // affiche Array(3) [ 0, 1, 2 ]
console.log(getAllMatchingRecords(persons, 'name', 'DJ Pope')); // affiche Array [ 4 ]
console.log(getAllMatchingRecords(persons, 'city', 'Vancouver')); // affiche Array [ 1, 2 ]

//console.log(cities)
//console.log(cities[0])
//console.log(cities[0].name)

/*
function searchByProperty(propertyName){
    for(obj of Object.values(cities)){
        console.log(obj); // objets
        console.log(obj.name); // nom de la ville
        console.log(obj[propertyName]); // nom de la ville
    }

}
*/
//searchByProperty('name');
