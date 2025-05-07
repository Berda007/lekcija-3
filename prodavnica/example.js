'use strict'

class Artikal {
    constructor(broj, naziv, cena, dostupan){
        this.broj=broj
        this.naziv=naziv
        this.cena=cena
        this.dostupan=dostupan
    }
}

const monitor = new Artikal(1, "monitor", 165, true)
const TV = new Artikal(2, "TV",650, false)
const mis = new Artikal(3,"mis",20, true)

const artikli = [monitor, TV, mis]

let tabela = document.querySelector("#artikli") 

for (let artikal of artikli){
    let tr = document.createElement("tr")
    
}
