export default defineEventHandler((event) => {
  const corsHeaders = {
    "Access-Control-Allow-Headers":
      "Origin, Accept, X-Requested-With, Authorization, Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS,GET,PUT,DELETE,PATCH",
    "Access-Control-Allow-Origin": "*",
  };

  setResponseHeaders(event, corsHeaders);

  if (event.node.req.method === "OPTIONS")
    return new Response("OK", { headers: corsHeaders });
});
