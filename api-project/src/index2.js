const freeforexapiurl = "https://data.alpaca.markets/v1/corporate-actions";

async function getData(freeforexapiurl) {
  try {
    const response = await fetch(freeforexapiurl);
    const data = await response.json;
    document.getElementById("api-response").textContent = data.name;
  } catch (error) {}
}

getData();
