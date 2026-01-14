// async function getData(poke) {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

//     if (response.status != 200) {
//       throw new Error(response);
//     } else {
//       const data = await response.json();
//       document.getElementById("api-response").textContent = data.name;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData("Squritle");

// cryptocurrency
// coinlore

// const apicoinlore = `https://api.coinlore.net/api/tickers/`;

// Link to instructions: https://api.coinlore.net/api/ticker/

// All exchanges: https://api.coinlore.net/api/exchanges/

// https://api.coinlore.net/api/ticker/?id=90

// Two Buttons: Price Over And Under $10000 (price_usd)

// async function getData(specific_ask) {
//   try {
//     const response = await fetch(
//       `https://api.coinlore.net/api/tickers/`
//     );
//     if (response.status != 200) {
//       throw new Error(response);
//     }
//     const data = await response.json();
//     const price_data = getElementById("crypto_container");
//     data.data.array.forEach((item) => {
//
//     });
//     document.getElementById("api-response").textContent = data.name;
//
//     // const a = data.filter((x) => x == "Japan");
//     console.log(a);
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// getData("id=90");
//
// console.log(data.price_usd);

const price = document.getElementById("price_box");
const apicoinlore = `https://api.coinlore.net/api/tickers/`;
const container_coinlore = document.getElementById("crypto_container");

async function getData() {
  try {
    const response = await fetch(apicoinlore);
    const data = await response.json();

    const expensiveCoins = data.data.filter(
      (coin) => parseFloat(coin.price_usd) > price
    );

    expensiveCoins.forEach((coin) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${coin.name} (${coin.symbol})</h2>
        <p class="price">$${Number(coin.price_usd).toLocaleString()}</p>
        <p>Rank: $${coin.rank}</p>
        <p>Market Cap: ${Number(coin.market_cap_usd).toLocaleString()}</p>
      `;

      container_coinlore.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
}

getData();
