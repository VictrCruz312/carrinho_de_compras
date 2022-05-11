const productsCart = [
    {
        id: 1,
        name: "perâ",
        price: 12.00
    },
    {
        id: 2,
        name: "maçã",
        price: 11.25
    },
    {
        id: 3,
        name: "uva",
        price: 6.00
    },
    {
        id: 4,
        name: "banana",
        price: 4.00
    }
]

const ButtonEnd  = document.createElement("button")
const body = document.querySelector("body")
const Main = document.createElement("main")
const productList = document.createElement("ul")
const section = document.createElement("section")
const div = document.createElement("div")


let soma = somar(productsCart)
function somar(lista) {
    let total = 0
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].price
    }
    return `<p>Total</p><p>R$${total.toFixed(2)}</p>`
}


ButtonEnd .innerText = "finalizar"
body.appendChild(Main)
Main.appendChild(productList)
Main.appendChild(section)
div.innerHTML = soma
section.appendChild(div)
section.appendChild(ButtonEnd)


function printItens(produtos){
    productList.innerHTML = `<li><p>item</p><p>valor</p></li>`
    for (let i = 0; i < produtos.length; i++) {
        productList.innerHTML += `<li>
            <p>${produtos[i].name}</p>
            <p>R$${produtos[i].price.toFixed(2)}</>
        </li>`
    }
}
printItens(productsCart)