const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

let coinArray = [];

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(coin => {
      coinArray.push(coin);
    });
  });

const getInput = () => {
  console.log(document.getElementById("inputValue").value);
};

// document.getElementById("getCoins").addEventListener("click", getCoins);

const searchCoin = () => {
  // const searchQuery = prompt("Which coin do you want to see?");

  const searchQuery = document.getElementById("inputValue").value;

  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  const filtered = coinArray.filter(coin => coin.id === lowerCaseSearchQuery);
  console.log(filtered[0].id);

  let createImg = document.createElement("img");
  createImg.setAttribute("src", `${filtered[0].image}`);
  createImg.setAttribute("style", "width: 50px");

  document.body.appendChild(createImg);

  let createH1 = document.createElement("h1");
  createH1.innerHTML = `${filtered[0].id} <br>`;

  document.body.appendChild(createH1);

  let createP = document.createElement("p");
  createP.innerHTML = `Current price: ${filtered[0].current_price} USD `;

  document.body.appendChild(createP);

  document.getElementById("inputValue").value = "";
};

document.getElementById("searchCoin").addEventListener("click", searchCoin);
