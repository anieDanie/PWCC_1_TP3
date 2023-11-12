/**
 * TP3
 * Dernière mise-à-jour : 11-11-2023 (22:15)
 * EXO 1 à 7 : terminés
 * 
 * Remarques:
 *      Voir si je peux retravailler les fonctions de recherche dans liste (surtout celle par clé-valeur)
 *      après EXO 8 et 9
 *      Exemple intéressant de décomposition objet (pour utiliser reduce()): voir ligne 460 cette version
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

    // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
    if(input === ''){
        return 'chaîne vide'
    } else if(containsOnlyLetters(input)){
        return findCountryByCityName(cities, input);
    }
}

function exo4(){
    const input = document.getElementById('input-3').value;
    document.getElementById('result-box-3').innerHTML = getMessageForExo4(input);
}
// TESTS UNITAIRES INTERFACE
// Oran     -> Algerie
// Paris    -> ville non trouvée

// 5 - Nombre de villes d'un pays
document.getElementById('button-4').addEventListener('click', exo5);

function getMessageForExo5(input){

    // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
    if(input === ''){
        return 'chaîne vide'
    } else if(containsOnlyLetters(input)){
        return '' + findCityCountByCountry(cities, input);
    }
}

function exo5(){
    const input = document.getElementById('input-4').value;
    document.getElementById('result-box-4').innerHTML = getMessageForExo5(input);
}
// TESTS UNITAIRES INTERFACE
//Canada    -­­> 3
//France    -> 0

// 6 - Population d'un pays
document.getElementById('button-5').addEventListener('click', exo6);

function getMessageForExo6(input){

        // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
        if(input === ''){
            return 'chaîne vide'
        } else if(containsOnlyLetters(input)){
            return '' + getTotalPopulation(cities, input);
        }
}

function exo6(){
    const input = document.getElementById('input-1').value;
    document.getElementById('result-box-1').innerHTML = getMessageForExo6(input);
}
// TESTS UNITAIRES INTERFACE
// Canada   -­> 5219553
// France   -> 0

// 7 - Plus grande ville d'un pays
document.getElementById('button-6').addEventListener('click', exo7);

function getMessageForExo7(input){
    console.log(input)

        // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
        if(input === ''){
            return 'chaîne vide'
        } else if(containsOnlyLetters(input)){
            return '' + findCityByPop(cities, input);
        }        
}

function exo7(){
    const input = document.getElementById('input-2').value;
    document.getElementById('result-box-2').innerHTML = getMessageForExo7(input);
}
// TESTS UNITAIRES INTERFACE
// Canada   -> Toronto
// France   -> aucune ville trouvée

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
 * À noter: le type de la donnée de l'élément recherché(passé en paramètre) doit correspondre 
 * au type spécifié dans la base de données.
 * Retourne une liste qui contient les indices des enregistrements (objets) qui rencontrent
 * les critères de recherche
 */
function getAllMatchingRecords(list, propertyName, searchedElement){
    //console.log(searchedElement)

    let indexList = [];

    for (let arr of Object.entries(list)){
        //console.log(arr)
        if(arr[1][propertyName] === searchedElement){            
            //console.log('oui!') // string
            indexList.push(Number(arr[0]))
            //console.log(indexList)
        }
    }
    return indexList;
}
//console.log(getAllMatchingRecords(cities, 'name', 'Oran')); // affiche Array [ 6 ]
//console.log(getAllMatchingRecords(cities, 'population', 8034649)); // affiche Array [ 3, 4 ]
//console.log(getAllMatchingRecords(cities, 'country', 'Canada')); // affiche Array(3) [ 0, 1, 2 ]
//console.log(getAllMatchingRecords(persons, 'name', 'DJ Pope')); // affiche Array [ 4 ]
//console.log(getAllMatchingRecords(persons, 'city', 'Vancouver')); // affiche Array [ 1, 2 ]

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

function findAt(list, index, propertyName){
    return list[index][propertyName];
}
//console.log(findAt(cities, 6, 'country')) // Affiche Algerie

/**
 * Convertit une chaîne de lettres selon le format str de
 * la base de données (Aaaaaa)
 * Prend en paramètre une chaîne de caractères.
 * Retourne une chaîne de caractères (type String)
 */
function standardizeStrData(str){
    newStr = str.toLowerCase().trim();
    return newStr[0].toUpperCase() + newStr.substring(1);
}
//console.log(standardizeCityName('oran'));
//console.log(standardizeCityName('ORAN'));
//console.log(standardizeCityName('oRAN'));
//console.log(standardizeCityName('ORAN  '));
//console.log(standardizeCityName('  ORAN  '));

/**
 * Recherche le pays associé au nom d'une ville dans les données.
 * Prend en paramètre la liste et l'élément recherché.
 * Retourne le pays (type string)
 */
function findCountryByCityName(list, cityName){

    const cityNameSTD = standardizeStrData(cityName);
    const indexList = getAllMatchingRecords(list, 'name', cityNameSTD);

    if(indexList.length === 1){
        return findAt(cities, indexList[0], 'country');
    } else if (indexList.length === 0){
        return 'ville non trouvée';
    } else {
        return `plus d'un enregistrement pour la ville spécifiée`
    }
}
//console.log(findCountryByCityName(cities, 'Oran')); // Affiche Algerie
//console.log(findCountryByCityName(cities, 'Paris')); // Affiche Algerie

/**
 * Énumère les villes associées au nom d'un pays dans les données.
 * Prend en paramètre la liste et l'élément recherché.
 * Retourne le nombre de villes (type Number)
 */
function findCityCountByCountry(list, countryName){

    const countryNameSTD = standardizeStrData(countryName);
    const indexList = getAllMatchingRecords(list, 'country', countryNameSTD);
    return indexList.length;
}
//console.log(findCityCountByCountry(cities, 'Canada'));
//console.log(findCityCountByCountry(cities, 'France'));

/**
 * Dénombre la population totale d'un pays à partir des données.
 * Prend en paramètre la liste et l'élément recherché.
 * Retourne le nombre d'individus (type Number)
 */
function getTotalPopulation(list, countryName){

    const countryNameSTD = standardizeStrData(countryName);
    const indexList = getAllMatchingRecords(list, 'country', countryNameSTD);
    
    let sum = 0;
    indexList.forEach(index => {
        sum += list[index].population;
    })
    return sum;    
}
//console.log(getTotalPopulation(cities, 'Canada')); // Affiche 5219553
//console.log(getTotalPopulation(cities, 'France')); // Affiche 0


/*
// Exemple intéressant : décomposer un objet
const traveler = [
    { description: 'Senior', Amount: 50 },
    { description: 'Senior', Amount: 50 },
    { description: 'Adult', Amount: 75 },
    { description: 'Child', Amount: 35 },
    { description: 'Infant', Amount: 25 },
  ];
  
console.log(traveler.reduce((n, {Amount}) => n + Amount, 0));
*/

/**
 * Repère la valeur maximale d'une propriété dans un ensemble de valeurs données
 * Prend en paramètre une liste (les données), une liste d'enregistrements et 
 * le nom de la propriété pour laquelle les valeurs sont comparées.
 * Retourne la valeur la plus élevée parmi les valeurs comparées (type Number)
 */
function findMaxValue(list, indexList, propertyName){

    let maxValue = list[indexList[0]][propertyName];

    indexList.forEach(item =>{
        if(list[item][propertyName] > maxValue){
            maxValue = list[item][propertyName]
        }
    })
    return maxValue;
}
//console.log(findMaxValue(cities, [0,1,2], 'population'))// Affiche 2794356

/**
 * Recherche une valeur pour une propriété donnée selon un couple clé-valeur
 */

function findByKeyValuePair(list, requestedDataPropertyName, refDataPropertyName, refDataPropertyValue){
    
    const result = list.find(item => item[refDataPropertyName] === refDataPropertyValue);
    //console.log(result[requestedDataPropertyName])
    return result[requestedDataPropertyName];
    
}
//console.log(findByKeyValuePair(cities, 'name', 'population', 2794356));

/**
 * Recherche la ville associée à une population donnée.
 * Prend en paramètre la liste et l'élément recherché.
 * Retourne le nom de la ville (type String)
 */
function findCityByPop(list, countryName){

    const countryNameSTD = standardizeStrData(countryName);
    const indexList = getAllMatchingRecords(list, 'country', countryNameSTD);

    if(indexList.length !== 0){
        const maxPop = findMaxValue(list, indexList, 'population');
        //console.log(maxPop)
        const city = findByKeyValuePair(list, 'name', 'population', maxPop);
        return city;
    }
    return 'aucune ville trouvée'
}
//console.log(findCityByPop(cities, 'Canada')); // Affiche Toronto
//console.log(findCityByPop(cities, 'France')); // Affiche aucune ville trouvée
