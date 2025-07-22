export default async (req) => {
    console.log(req);
    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ message: "Hello from Netlify Function" }),
      };
};

export const config = {
    path: "/"
};