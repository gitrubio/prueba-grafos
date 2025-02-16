import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const url = event.queryStringParameters?.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing URL parameter" }),
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": response.headers.get("Content-Type") || "application/json",
      },
      body: data,
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch resource" }),
    };
  }
};
