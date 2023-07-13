import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList } from "~~/variables/variables.server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "OPTIONS")
    return new Response("OK", { headers: corsHeaders });

  // This is where we retrieve the link data object
  const payload = await readBody(event);

  const headers =
    event.node.req && event.node.req.headers
      ? Object.assign({}, event.node.req.headers)
      : {};

  const ip_address = headers["x-forwarded-for"]?.toString();

  const user_agent = headers["user-agent"];

  console.log({ ip_address, user_agent });

  // Confirm it's a "sight" type
  if ((payload.type as string) === "sight") {
    const { href } = payload.data;
    const processedData: LinkListType = {
      href,
      attempts: [
        {
          ip_address,
          user_agent,
        },
      ],
    };

    // Update insights
    await updateStats(processedData);
  }

  return { linkList };
});
