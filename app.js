
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

//Inject "shops"into the container in index.html //

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

pokemon.forEach((element) => displayShops(element))

//Adds items into cart, and also remove buttons//

function addcart(item) {
  const cart = document.querySelector(".cart");
  cart.insertAdjacentHTML(
    "beforeend",
    `<p class="text item"> 
    ${item.name} ${item.price} Pokédollars 
    <button type= "button" class= "removebutton" data-price="${item.price}" > Remove </button> 
    </p> 
    `
  );
}

//When you press a button, find the shop that it's in and add it to the cart and push price to cart aswell//

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

      addcart(selectedPokemon)
      console.log(selectedPokemon) //test//
}}),
);

//Remove button, grab ammount removed, and push it to cart as negative, and recalculate total//

document.querySelector(".cart").addEventListener("click", function (event) {
  const button = event.target.closest(".removebutton");
  if (!button) return;
  button.closest(".item").remove();
  const removal = Number(button.getAttribute("data-price"));
  cart.push(-removal)
  console.log(-removal) //test//
  cartTotal = 0
      for (i=0; i<cart.length; i++){
        cartTotal += cart[i]
        document.getElementById("total").innerHTML = cartTotal
      }
});

//Filter//

const filterbuttons = document.querySelectorAll("button");
filterbuttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const filtering = button.getAttribute("data-filter");
    if (filtering === "filterKanto"){
      oldShop = document.querySelectorAll('.shop')
        oldShop.forEach(shop => console.log(shop))
    } if (filtering === "filterJohto"){

    } if (filtering === "filterPaldea"){

    } if (filtering === "filterAll"){

    }
  }),
);


