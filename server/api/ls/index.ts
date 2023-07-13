import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList } from "~~/variables/variables.server";
import geoip from "geoip-lite";

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
  const ip_address =
    event.node.req.socket.remoteAddress ??
    headers["x-forwarded-for"]?.toString() ??
    headers["x-real-ip"]?.toString();

  console.log(ip_address, "ip_address");

  const geolocation_data = geoip.lookup(ip_address ?? "") ?? {};

  console.log(geolocation_data);

  // Confirm it's a "sight" type
  if ((payload.type as string) === "sight") {
    const linkDataObject = payload.data;
    const processedData: LinkListType = {
      href: linkDataObject.href,
      attempts: [
        {
          ip_address,
          device_type: "device_type",
          geolocation_data,
        },
      ],
    };

    // Update insights
    await updateStats(processedData);
  }

  return { linkList };
});