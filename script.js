// Pirma užduotis
var legalAge = 20
var clientAge = 30

if(legalAge <= clientAge) {
    alert('Klientas pasiekęs legalAge')
} else{
    alert('Klientas ne pasiekęs legalAge')
}

// Antra užduotis
var vardas = 'Evelina'
if(vardas.length > 6){
alert('Ilgas vardas')
} else {
   
}

// Trečia užduotis
var amzius = '20'
if(amzius >= 100 || amzius <= 0) {
    alert('Invalid age')
} else{
    if(amzius <= 18){
        alert('Child')
    }
    if(amzius > 18)
    alert('Adult')
}

// Ketvirta užduotis
var car = prompt('Įveskite savo automobilio ženklą')
if(car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche'){
    alert('VW Group')
} else if(car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    alert('BMW Group')
} else {
    alert('Nepriklauso nei BMW Group, nei VW Group')
}