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

const apicoinlore = `https://api.coinlore.net/api/tickers/`;

// Link to instructions: https://api.coinlore.net/api/ticker/

// All exchanges: https://api.coinlore.net/api/exchanges/

// https://api.coinlore.net/api/ticker/?id=90

// Two Buttons: Price Over And Under $10000 (price_usd)

async function getData(specific_ask) {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/ticker/?${specific_ask}`
    );
    if (response.status != 200) {
      throw new Error(response);
    }
    const data = await response.json();
    document.getElementById("api-response").textContent = data.name;

    // const a = data.filter((x) => x == "Japan");
    console.log(a);
  } catch (error) {
    console.error(error);
  }
}

getData("id=90");
