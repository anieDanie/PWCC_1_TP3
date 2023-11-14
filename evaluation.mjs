/*
    TP3 : tests unitaires interface
    Dernière mise-à-jour: 13-11-2023
*/

import mocha from "https://esm.sh/mocha@10.2.0"
import {assert} from "https://esm.sh/chai@4.3.10"
mocha.setup('bdd');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("question 1", function(){
    it("should have proper title", function(){
        const expt = "Travail Pratique III";
        assert.equal(expt, document.getElementById("main-title").innerText)
    })
});


describe("question 2", function(){
    it("should compute sum from 1 to 5", async function() {
        const n = 3;
        const expt = 6;
        document.getElementById("input-1").value = n;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should compute sum from 1 to 10", async function() {
        const n = 10;
        const expt = 55;
        document.getElementById("input-1").value = n;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should compute sum of 0", async function() {
        const n = 0;
        const expt = 0;
        document.getElementById("input-1").value = n;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should display error message if not a number", async function() {
        const n = 'allo';
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = n;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should display error message if negative number", async function() {
        const n = -12;
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = n;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });
});

describe("question 3", function(){
    it("should compute sum of numbers from 1 to 3 that have 1 as common divisor", async function() {
        const value1 = 1;
        const value2 = 3;
        const expt = 6;
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should compute sum of numbers from 1 to 10 that have 2 as common divisor", async function() {
        const value1 = 2;
        const value2 = 10;
        const expt = 30;
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should display error message if input 1 is not a number", async function() {
        const value1 = 'allo';
        const value2 = 10;
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should display error message if input 1 is negative number", async function() {
        const value1 = -12;
        const value2 = 10;
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should display error message if input 2 is not a number", async function() {
        const value1 = 10;
        const value2 = 'allo';
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should display error message if input 2 is negative number", async function() {
        const value1 = 12;
        const value2 = -10;
        const expt = 'Entrée invalide';
        document.getElementById("input-1").value = value1;
        document.getElementById("input-2").value = value2;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });
});

describe("question 4", function(){
    it("should display associate country name of city of Oran (in DB)", async function() {
        const cityName = 'Oran';
        const expt = "Algerie";
        document.getElementById("input-3").value = cityName;
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });
    it("should display 'not found' message (not in DB)", async function() {
        const cityName = 'Paris';
        const expt = "ville non trouvée";
        document.getElementById("input-3").value = cityName;
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });    
});

describe("question 5", function(){
    it("should display number of cities in Canada (in DB)", async function() {
        const countryName = 'Canada';
        const expt = 3;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should display number of cities in France (not in DB)", async function() {
        const countryName = 'France';
        const expt = 0;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });
});

describe("question 6", function(){
    it("should display total population of Canada (in DB)", async function() {
        const countryName = 'Canada';
        const expt = 5219553;
        document.getElementById("input-1").value = countryName;
        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });
    
    it("should display total population of France (not in DB)", async function() {
        const countryName = 'France';
        const expt = 0;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });
});

describe("question 7", function(){
    it("should display most populous city of Canada (in DB)", async function() {
        const countryName = 'Canada';
        const expt = "Toronto";
        document.getElementById("input-2").value = countryName;
        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });
    
    it("should display 'not found' message (not in DB)", async function() {
        const countryName = 'France';
        const expt = "aucune ville trouvée";
        document.getElementById("input-2").value = countryName;
        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });   
});

describe("question 8", function(){
    it("should display place of origin of Djaffar Bensetti (in DB)", async function() {
        const personName = 'Djaffar Bensetti';
        const expt = "Algerie";
        document.getElementById("input-3").value = personName;
        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });
    
    it("should display place of origin of Marie-Antoinette (not in DB)", async function() {
        const personName = 'Marie Antoinette';
        const expt = "aucune personne trouvée";
        document.getElementById("input-3").value = personName;
        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });   
});

describe("question 9", function(){
    it("should display number of persons from Canada (in DB)", async function() {
        const countryName = 'Canada';
        const expt = 3;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should display number of persons from Mexique (in DB)", async function() {
        const countryName = 'Mexique';
        const expt = 0;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    }); 

    it("should display number of persons from France (not in DB)", async function() {
        const countryName = 'France';
        const expt = 0;
        document.getElementById("input-4").value = countryName;
        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });  
});


mocha.run();