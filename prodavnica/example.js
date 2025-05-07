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
tabela.style.border =  '1px solid black'
tabela.style.borderCollapse = "collapse"

let hederTabele = document.querySelectorAll("th")
for (let th of hederTabele) {
    th.style.border = "1px solid black"
    th.style.textAlign = "center"
    th.style.fontWeight = "normal"
}

for (let artikal of artikli){
    let tr = document.createElement("tr")

    let id = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")
    let dostupnost = document.createElement("td")

    let nizCelija = [id, naziv, cena, dostupnost]

    for (let td of nizCelija ){
        td.style.border = "1px solid black"
        td.style.textAlign = "center"
    }
    

    id.textContent = artikal.broj
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena
    if (artikal.dostupan){
        dostupnost.textContent = "DA"
    } else {
        dostupnost.textContent = "NE"
        tr.style.backgroundColor = "lightcoral"
    }

    tr.appendChild(id)
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tr.appendChild(dostupnost)

    tabela.appendChild(tr)

}
