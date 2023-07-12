export const config = { path: "/api/ls" };

export default async (request: any, context: { geo: any; ip: any }) => {
  console.log({
    geo: context.geo,
    ip: context.ip,
  });

  return new Response(
    JSON.stringify({
      ...context.geo,
      ip: context.ip,
    }),
    // Add a second parameter to `Response.json`
    // where we can provide our CORS headers
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      },
    }
  );
};
