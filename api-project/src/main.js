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

// const freeforexapiurl = `https://api.coinlore.net/api/exchanges/`;

async function getData(specific_ask) {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/exchanges/${specific_ask}`
    );
    if (response.status != 200) {
      throw new Error(response);
    }
    const data = await response.json();
    document.getElementById("api-response").textContent = data.name;
  } catch (error) {
    console.error(error);
  }
}

getData("brazil");
