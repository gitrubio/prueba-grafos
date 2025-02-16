const fetch = require("node-fetch");

exports.handler = async function (event) {
  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Falta el parámetro 'url'" }),
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error obteniendo los datos" }),
    };
  }
};
