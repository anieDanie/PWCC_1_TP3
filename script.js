/**
 * TP3
 * Dernière mise-à-jour : 12/11/ 15:23
 * EXO 1 à 9 : terminés
 * 
 * Remarques:
 *      (1) Fonction standardizeStrData n'existe plus dans cette version: 
 *      c'est la méthode getAllMatchingRecords() qui définit le
 *      format pour comparer les données des BD et les entrées saisies
 *      par l'utilisateur: on compare des strings, en lettres majuscules,
 *      lorsqu'il s'agit de mots.
 *      (2) La recherche dans une liste se fait principalement par la biais
 *      du numéro de l'enregistrement (indice de l'objet dans une liste),
 *      lorsqu'il s'agit d'obtenir la valeur d'une propriété, via la fonction
 *      findAt(). Il est aussi possible de faire une recherche par le biais
 *      d'une paire clé-valeur dans une liste, via la fonction findByKeyValuePair(). 
 *      (3) À faire : tests    
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

// VUE et CONTRÔLEUR

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

        // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
        if(input === ''){
            return 'chaîne vide'
        } else if(containsOnlyLetters(input)){
            return findCityByPop(cities, input);
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
document.getElementById('button-7').addEventListener('click', exo8);

function getMessageForExo8(input){
        
        // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
        if(input === ''){
            return 'chaîne vide'
        } else if(containsOnlyLetters(input)){
            return findCountryByPersonName(cities, persons, input);
        }                
}

function exo8(){
    const input = document.getElementById('input-3').value;
    document.getElementById('result-box-3').innerHTML = getMessageForExo8(input);
}
// TESTS UNITAIRES INTERFACE
//Djaffar Bensetti  -> Algerie
//Marie Antoinette  -> aucune personne trouvée

// 9 - Nombre de personnes dans un pays
document.getElementById('button-8').addEventListener('click', exo9);

function getMessageForExo9(input){
    console.log(input)
        
        // Valider s'il s'agit d'une chaîne vide ou d'une chaîne de lettres (mots)
        if(input === ''){
            return 'chaîne vide'
        } else if(containsOnlyLetters(input)){
            return '' + findPersonCountByCountry(cities, persons, input);
        }                
}

function exo9(){
    const input = document.getElementById('input-4').value;
    document.getElementById('result-box-4').innerHTML = getMessageForExo9(input);
}
// TESTS UNITAIRES INTERFACE
// Canada   -> 3
// Mexique  -> 0
// France   -> 0

// FONCTIONS pour logique application

// UTILITAIRES
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
 * Prend en paramètre une valeur numérique entière (type Number, 
 * validé par Number.isInteger()). Retourne la somme (type Number)
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
 * les multiples. Retourne une valeur numérique(type Number)
 * */
function sumOfMultiplesInFiniteSequenceOfTerms(n, d, selectFunc){
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

/**
 * Valide si une chaîne de caractères ne contient que des caractères qui forment des mots.
 * Prend une chaîne de caractères en paramètre. Retourne un booléen.
 */
function containsOnlyLetters(s){
    // regex pour mot français : lettres françaises (Min, Maj), tiret, espaces blancs
    return /^[a-zA-ZÀ-ÿ-. ]*$/.test(s);
}

// FONCTIONS LIÉES AUX LISTES D'OBJETS

/**
 * Récupère les indices des enregistrements (objets) qui correspondent
 * aux critères de recherche spécifiés.
 * Prend en paramètre une liste d'enregistrements, la propriété pour laquelle
 * il faut effectuer la recherche et l'élément recherché.
 * Retourne une liste qui contient les indices des enregistrements (objets) qui rencontrent
 * les critères de recherche.
 * A NOTER: On compare 2 strings dans cette méthodes: les nombres sont convertis en string
 * et les lettres sont en lettres majuscules.
 */
function getAllMatchingRecords(list, propertyName, searchedElement){

    let indexList = [];

    for (let arr of Object.entries(list)){
        if(arr[1][propertyName].toString().toUpperCase() 
            === searchedElement.toString().toUpperCase().trim()){            
            
                indexList.push(Number(arr[0]))  
        }
    }
    return indexList;
}
//console.log(getAllMatchingRecords(cities, 'name', 'Oran')); // affiche Array [ 6 ]
//console.log(getAllMatchingRecords(cities, 'population', 8034649)); // affiche Array [ 3, 4 ]
//console.log(getAllMatchingRecords(cities, 'country', 'Canada')); // affiche Array(3) [ 0, 1, 2 ]
//console.log(getAllMatchingRecords(persons, 'name', 'DJ Pope')); // affiche Array [ 4 ]
//console.log(getAllMatchingRecords(persons, 'city', 'Vancouver')); // affiche Array [ 1, 2 ]
//console.log(getAllMatchingRecords(cities, 'country', '   Canada   ')); // affiche Array(3) [ 0, 1, 2 ]


/**
 * Recherche une valeur pour une propriété donnée selon le numéro
 * de l'enregistrement (indice de l'objet dans la liste Array)
 * Prend en paramètre les données, l'indice et le nom de la propriété.
 * Retourne la valeur associée à la propriété pour l'enregistrement.
 */
function findAt(list, index, propertyName){
    return list[index][propertyName];
}
//console.log(findAt(cities, 6, 'country')) // Affiche Algerie

/**
 * Recherche une valeur pour une propriété donnée selon un couple clé-valeur.
 * Prend en paramètre les données, le nom de la propriété pour la valeur recherchée,
 * la clé et la valeur associées à la valeur recherchée.
 * Retourne la valeur (type Number ou String, selon le type de la donnée dans la BD)
 */

function findByKeyValuePair(list, requestedDataPropertyName, refDataPropertyName, refDataPropertyValue){
    
    const result = list.find(item => item[refDataPropertyName] === refDataPropertyValue);
    //console.log(result[requestedDataPropertyName])
    return result[requestedDataPropertyName];
    
}
//console.log(findByKeyValuePair(cities, 'name', 'population', 2794356));

/**
 * Repère la valeur maximale d'une propriété dans un ensemble de valeurs.
 * Prend en paramètre les données, la liste des enregistrements concernés et 
 * le nom de la propriété pour laquelle les valeurs sont comparées.
 * Retourne la valeur la plus élevée parmi les valeurs comparées (type Number)
 */
function findMaxValue(list, indexList, propertyName){

    let maxValue = list[indexList[0]][propertyName];

    indexList.forEach((index) =>{
        if(list[index][propertyName] > maxValue){
            maxValue = list[index][propertyName]
        }
    })
    return maxValue;
}
//console.log(findMaxValue(cities, [0,1,2], 'population'))// Affiche 2794356

// FONCTIONS POUR REQUÊTES DE RECHERCHE ET DE TRAITEMENT DE DONNÉES (dans les listes)

/**
 * Recherche le pays associé au nom d'une ville dans les données.
 * Prend en paramètre les données et le nom de la ville.
 * Retourne le nom du pays (type string)
 */
function findCountryByCityName(list, cityName){

    const indexList = getAllMatchingRecords(list, 'name', cityName);

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
 * Prend en paramètre les données et le nom du pays.
 * Retourne le nombre de villes (type Number)
 */
function findCityCountByCountry(list, countryName){

    const indexList = getAllMatchingRecords(list, 'country', countryName);
    return indexList.length;
}
//console.log(findCityCountByCountry(cities, 'Canada')); // Affiche 3
//console.log(findCityCountByCountry(cities, 'France')); // Affiche 0

/**
 * Dénombre la population totale d'un pays à partir des données.
 * Prend en paramètre les données et le nom du pays concerné.
 * Retourne le nombre d'individus (type Number)
 */
function getTotalPopulation(list, countryName){

    const indexList = getAllMatchingRecords(list, 'country', countryName);
    
    let sum = 0;
    indexList.forEach(index => {
        sum += list[index].population;
    })
    return sum;    
}
//console.log(getTotalPopulation(cities, 'Canada')); // Affiche 5219553
//console.log(getTotalPopulation(cities, 'France')); // Affiche 0

/**
 * Recherche la ville associée à une population donnée.
 * Prend en paramètre les données et le nom du pays associé à la ville recherchée.
 * Retourne le nom de la ville (type String)
 */
function findCityByPop(list, countryName){

    const indexList = getAllMatchingRecords(list, 'country', countryName);
    
    if(indexList.length !== 0){
        const maxPop = findMaxValue(list, indexList, 'population');
        const city = findByKeyValuePair(list, 'name', 'population', maxPop);
        return city;
    }
    return 'aucune ville trouvée'
}
//console.log(findCityByPop(cities, 'Canada')); // Affiche Toronto
//console.log(findCityByPop(cities, 'France')); // Affiche aucune ville trouvée

/**
 * Recherche le pays d'origine d'une personne.
 * Prend en paramètre les données (2 listes d'enreg)
 * Retourne le résultat (nom du pays ou msg: aucune personne trouvée, type String)
 */
function findCountryByPersonName(list1, list2, personName){

    const indexList = getAllMatchingRecords(list2, 'name', personName);

    if(indexList.length !== 0){
        if(indexList.length === 1){
            return findAt(list1, indexList[0], 'country');
        } else {
            console.log('Plusieurs enregistrements correspondent aux critères de recherche');
        }
    }
    return 'aucune personne trouvée';
}
//console.log(findCountryByPersonName(cities, persons, 'Djaffar Bensetti')); // Affiche Algerie
//console.log(findCountryByPersonName(cities, persons, 'dj Pope')); // Affiche Colombie
//console.log(findCountryByPersonName(cities, persons, 'Marie Antoinette')); // Affiche aucune personne trouvée


/**
 * Recherche le nombre de personnes provenant d'un pays donné.
 * Prend en paramètre les données (2 listes d'enreg).
 * Retourne le résultat (nombre de personnes ou 0, type Number)
 */
function findPersonCountByCountry(list1, list2, countryName){
    
    const indexList = getAllMatchingRecords(list1, 'country', countryName);

    if(indexList.length !== 0){
        let sum = 0;
        indexList.forEach((city) => {
            list2.map((person) => {
                if(person.city === list1[city].name){
                    sum++
                }
            })
        });
        return sum;
    }
    return 0;
}
//console.log(findPersonCountByCountry(cities, persons, 'Canada')); // Affiche 3
//console.log(findPersonCountByCountry(cities, persons, 'Mexique')); // Affiche 0
//console.log(findPersonCountByCountry(cities, persons, 'France')); // Affiche 0

