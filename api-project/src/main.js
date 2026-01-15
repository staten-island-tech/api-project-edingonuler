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


const apicoinlore = "https://api.coinlore.net/api/tickers/";
const container = document.getElementById("crypto_container");
const form = document.getElementById("priceForm");
const priceInput = document.getElementById("price_box");

form.addEventListener("submit", getData);

async function getData(event) {
  event.preventDefault();

  const minPrice = Number(priceInput.value);
  container.innerHTML = "";

  try {
    const response = await fetch(apicoinlore);
    const data = await response.json();

    const filteredCoins = data.data.filter(
        coin => Number(coin.price_usd) > minPrice
    );

    if (filteredCoins.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>No coins found.</p>";
      return;
    }

    filteredCoins.forEach(coin => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${coin.name} (${coin.symbol})</h2>
        <p><strong>Price:</strong> $${Number(coin.price_usd).toLocaleString()}</p>
        <p><strong>Rank:</strong> ${coin.rank}</p>
        <p><strong>Market Cap:</strong> $${Number(coin.market_cap_usd).toLocaleString()}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    container.innerHTML = "<p>Error loading data.</p>";
  }
}