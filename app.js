
//DEFINE OBJECTS//

cart = []

pokemon = [
    {name: "Arbok", ogRegion:"Kanto", dexNum:24, price:5500, img:"0024Arbok.png"},
    {name: "Pikachu", ogRegion:"Kanto", dexNum:25, price:100000, img:"0025Pikachu.png"},
    {name: "Nidorino", ogRegion:"Kanto", dexNum:33, price:4500, img:"0033Nidorino.png"},
    {name: "Meowth", ogRegion:"Kanto", dexNum:52, price:2000, img:"0052Meowth.png"},
    {name: "Arcanine", ogRegion:"Kanto", dexNum:59, price:8000, img:"0059Arcanine.png"},
    {name: "Cubone", ogRegion:"Kanto", dexNum:104, price:4000, img:"0104Cubone.png"},
    {name: "Eevee", ogRegion:"Kanto", dexNum:133, price:1500, img:"0133Eevee.png"},
    {name: "Porygon", ogRegion:"Kanto", dexNum:137, price:9000, img:"0137Porygon.png"},
    {name: "Kabuto", ogRegion:"Kanto", dexNum:140, price:6000, img:"0140Kabuto.png"},
    {name: "Dratini", ogRegion:"Kanto", dexNum:147, price:7500, img:"0147Dratini.png"},
    {name: "Furret", ogRegion:"Johto", dexNum:162, price:5500, img:"0162Furret.png"},
    {name: "Crobat", ogRegion:"Johto", dexNum:169, price:6000, img:"0169Crobat.png"},
    {name: "Lanturn", ogRegion:"Johto", dexNum:171, price:4500, img:"0171Lanturn.png"},
    {name: "Politoed", ogRegion:"Johto", dexNum:186, price:5000, img:"0186Politoed.png"},
    {name: "Hoppip", ogRegion:"Johto", dexNum:187, price:2000, img:"0187Hoppip.png"},
    {name: "Espeon", ogRegion:"Johto", dexNum:196, price:4500, img:"0196Espeon.png"},
    {name: "Umbreon", ogRegion:"Johto", dexNum:197, price:4500, img:"0197Umbreon.png"},
    {name: "Forretress", ogRegion:"Johto", dexNum:205, price:3500, img:"0205Forretress.png"},
    {name: "Granbull", ogRegion:"Johto", dexNum:210, price:4000, img:"0210Granbull.png"},
    {name: "Gholdengo", ogRegion:"Paldea", dexNum:1000, price:250000, img:"1000Gholdengo.png"},
]

//INJECT "SHOPS" INTO the container in index.html //

function displayShops(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="shop">
        <h3 class="text"> ${item.name} </h3>
        <h3 class="text"> No. ${item.dexNum}</h3>
        <h3 class="text"> ${item.ogRegion}</h3>
        <img class="img" src= ${item.img} alt= ${item.name} width="300">
        <button type="button" data-item = "${item.dexNum}">Add to Cart for ${item.price} Pokédollars</button>
    </div>`
  );
}

//ADDS CART//

function addcart(item) {
  const cart = document.querySelector(".cart");
  cart.insertAdjacentHTML(
    "beforeend",
    `
    <p class="text"> ${item} </p> <button type="button" data-item = "${item.dexNum}"> Remove </button>
    `
  );
}

//change this to foreach, its better long term

pokemon.forEach((element) => displayShops(element))

//RETURNS THE ATTRIBUTE ASSOCIATED WITH THE POKEMON IN THE SHOP THAT HAS THE BUTTON CLICKED//
//I plan to push the pokemon's data into cart = [] and use that to 
// calculate the total of the pokemon and also add data to a potential cart section//

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const id = Number(button.getAttribute("data-item"));
    const selectedPokemon = pokemon.find((p) => p.dexNum === id);

    if (selectedPokemon) {
      cart.push(selectedPokemon.price);
      cartTotal = 0
      for (i=0; i<cart.length; i++){
        cartTotal += cart[i]
        document.getElementById("total").innerHTML = cartTotal
      }
      addcart(selectedPokemon.name + " " + selectedPokemon.price + " Pokédollars")
      console.log(selectedPokemon)
}}),
);

w



//THIS IS OLD JS CODE, CHOPPED, BUT COULD SALVAGE//
//Yeah hell no this is absolutely unsalvagable//

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



