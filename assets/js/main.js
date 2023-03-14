const größe = document.getElementById("inputGröße");
const alter = document.getElementById("inputAlter");
const gewicht = document.getElementById("inputGewicht");
const frau = document.getElementById("weiblich");
const mann = document.getElementById("männlich");
const aktivität = document.getElementById("aktivität")
const grundumsatzKcal = document.getElementById("grundumsatzKcal");
const grundumsatzKJ = document.getElementById("grundumsatzKJ");
const gesamtumsatzKcal = document.getElementById("gesamtumsatzKcal");
const gesamtumsatzKJ = document.getElementById("gesamtumsatzKJ");

const rechner = () => {

    const grundFrau = 655.1 + (9.6 * gewicht.value) + (1.8 * größe.value) - (4.7 * alter.value); 
    const grundMann = 664.7 + (13.7 * gewicht.value) + (5 * größe.value) - (6.8 * alter.value)

    if (frau.checked){
        grundumsatzKcal.innerHTML = grundFrau.toFixed(0).concat("kcal");
        grundumsatzKJ.innerHTML = (grundFrau * 4.1868).toFixed(0).concat("kJ")
        gesamtumsatzKcal.innerHTML= (grundFrau * aktivität.value).toFixed(0).concat("kcal");
        gesamtumsatzKJ.innerHTML = ((grundFrau * aktivität.value) * 4.1868).toFixed(0).concat("kJ")

    } else{
        grundumsatzKcal.innerHTML = grundMann.toFixed(0).concat("kcal");
        grundumsatzKJ.innerHTML = (grundMann * 4.1868).toFixed(0).concat("kJ")
        gesamtumsatzKcal.innerHTML= (grundMann * aktivität.value).toFixed(0).concat("kcal");
        grundumsatzKJ.innerHTML =  ((grundMann * aktivität.value) * 4.1868).toFixed(0).concat("kJ")
    }
}

