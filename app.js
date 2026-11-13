shopping = true
cart = []
pokemon = [,
    {name: "Arbok", ogRegion:"Kanto", dexNum:24, price:5500},
    {name: "Pikachu", ogRegion:"Kanto", dexNum:25, price:100000},
    {name: "Nidorino", ogRegion:"Kanto", dexNum:33, price:4500},
    {name: "Meowth", ogRegion:"Kanto", dexNum:52, price:2000},
    {name: "Arcanine", ogRegion:"Kanto", dexNum:59, price:8000},
    {name: "Cubone", ogRegion:"Kanto", dexNum:104, price:4000},
    {name: "Eevee", ogRegion:"Kanto", dexNum:133, price:1500},
    {name: "Porygon", ogRegion:"Kanto", dexNum:137, price:9000},
    {name: "Kabuto", ogRegion:"Kanto", dexNum:140, price:6000},
    {name: "Dratini", ogRegion:"Kanto", dexNum:147, price:7500},
    {name: "Furret", ogRegion:"Johto", dexNum:162, price:5500},
    {name: "Crobat", ogRegion:"Johto", dexNum:169, price:6000},
    {name: "Lanturn", ogRegion:"Johto", dexNum:171, price:4500},
    {name: "Hoppip", ogRegion:"Johto", dexNum:187, price:2000},
    {name: "Politoed", ogRegion:"Johto", dexNum:186, price:5000},
    {name: "Espeon", ogRegion:"Johto", dexNum:196, price:4500},
    {name: "Umbreon", ogRegion:"Johto", dexNum:197, price:4500},
    {name: "Forretress", ogRegion:"Johto", dexNum:205, price:3500},
    {name: "Granbull", ogRegion:"Johto", dexNum:210, price:4000},
    {name: "Gholdengo", ogRegion:"Paldea", dexNum:1000, price:250000},
]


function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}
//reminder to add class to button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
    //go find item in array
    //items[data-item]
  }),
);
/*function shop(){
console.log("Shop here to buy Pokémon")
for (a = 1; a < pokemon.length; a++){
    console.log(pokemon[a].name,"| No.",pokemon[a].dexNum,"|",pokemon[a].price,"Pokédollars")
}
//calculateTotal()
/*let promptAdd = prompt("Buy a Pokémon by typing its No.","Type Here")
addToCart(promptAdd)
return
}

function calculateTotal(){
total = 0
for(b = 0; b = cart.length; b++){
    for(c = 1; c = pokemon.length; c++){
        if (b === c){
        total += cart[b].prices
        }
    }
}
console.log(total)
return
}

function addToCart(added){
for(d = 1; d < pokemon.length; d++){
    if (added === pokemon[y].No){
        console.log("Are you sure you want to add",pokemon[d].name," to cart for",pokemon[d].price,"Pokédollars?")
        console.log("You successfully added", added)
        cart.push(added)
    }
}
return
}

function removeFromCart(removed){
for(d = 1; d < pokemon.length; d++){
    if (removed === pokemon[y].No){
        console.log("Are you sure you want to remove",pokemon[d].name,"from the cart?")
        console.log("You successfully removed", added, "from the cart")
        cart.remove(added)
    }
}
return
}
shop()
//while(shopping){
 //shop
//}
*/



