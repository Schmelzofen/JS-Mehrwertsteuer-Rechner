mwstBerechnen = () =>{

}

let mwstDrauf = document.getElementById("mwstDrauf")
let mwstRunter = document.getElementById("mwstRunter")
let ergebnis1 = document.getElementById("ergebnis1")
let ergebnis2 = document.getElementById("ergebnis2")
let neunzehn = document.getElementById("neunzehn")
let sieben = document.getElementById("sieben")
let eingabe = document.getElementById("eingabe")
let betragFeld = document.getElementById("betragFeld")
let bruttoOderNetto = document.getElementById("bruttoOderNetto")


function berechnen(){
    console.log(mwstDrauf.checked)
    console.log(mwstRunter.checked)
    console.log(neunzehn.checked)
    console.log(sieben.checked)
    if(mwstDrauf.checked === true && neunzehn.checked === true){
        ergebnis1.innerHTML = ((eingabe.value*1)* 0.19).toFixed(2)+"€"
        ergebnis2.innerHTML = ((eingabe.value*1)* 1.19).toFixed(2)+"€"
    }   else if(mwstDrauf.checked === true && sieben.checked === true){
        ergebnis1.innerHTML = ((eingabe.value*1)* 0.07).toFixed(2)+"€"
        ergebnis2.innerHTML = ((eingabe.value*1)* 1.07).toFixed(2)+"€"
    }   else if(mwstRunter.checked === true && neunzehn.checked === true){
        ergebnis1.innerHTML = ((eingabe.value/119)*19).toFixed(2)+"€"
        ergebnis2.innerHTML = ((eingabe.value*1)/ 1.19).toFixed(2)+"€"
    }   else if(mwstRunter.checked === true && sieben.checked === true){
        ergebnis1.innerHTML = ((eingabe.value/107)*7).toFixed(2)+"€"
        ergebnis2.innerHTML = ((eingabe.value*1)/ 1.07).toFixed(2)+"€"
    }   else{
        betragFeld.innerHTML = "Betrag eingeben!"
    }
}

function show(){
    if(mwstDrauf.checked === true && mwstRunter.checked === false){
        betragFeld.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        bruttoOderNetto.innerHTML = "Bruttobetrag (Endergebnis)"
    }   else(betragFeld.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro",bruttoOderNetto.innerHTML = "Nettobetrag")
}

if(mwstDrauf.checked == true){
    betragFeld.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    bruttoOderNetto.innerHTML = "Bruttobetrag (Endergebnis)"
    ergebnis1.innerHTML = "0,00€"
    ergebnis2.innerHTML = "0,00€"
}