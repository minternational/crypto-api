const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

let coinArray = [];

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(coin => {
      coinArray.push(coin);
      console.log(coin);
    });
  });

const input = document.getElementById("inputValue");

input.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    document.getElementById("searchCoin").click();
  }
});

// document.getElementById("getCoins").addEventListener("click", getCoins);

const searchCoin = () => {
  // const searchQuery = prompt("Which coin do you want to see?");
  const searchQuery = document.getElementById("inputValue").value;
  const lowerCaseSearchQuery = searchQuery.toLowerCase();

  const filtered = coinArray.filter(coin => lowerCaseSearchQuery === coin.id);

  let createImg = document.createElement("img");
  createImg.setAttribute("src", `${filtered[0].image}`);
  createImg.setAttribute("style", "width: 75px");
  document.body.appendChild(createImg);

  let createH1 = document.createElement("h1");
  createH1.innerHTML = `${filtered[0].id} <br>`;
  document.body.appendChild(createH1);

  let createP = document.createElement("p");
  createP.innerHTML = `<b>Symbol:</b> ${filtered[0].symbol} <br> <b>Current price:</b> ${filtered[0].current_price} USD <br> <b>Price change in last 24h:</b> ${filtered[0].price_change_percentage_24h}%`;
  document.body.appendChild(createP);

  document.getElementById("inputValue").value = "";
};

document.getElementById("searchCoin").addEventListener("click", searchCoin);
