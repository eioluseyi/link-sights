import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList } from "~~/variables/variables.server";
import ipLocation from "iplocation";

const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Origin": "*",
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
  //   const geolocation_data = geoip.lookup(ip_address ?? "");

  //   console.log(geolocation_data);

  //   var ipLocation = require("ip-location");

  (async () => {
    try {
      const ipRes = await ipLocation("172.217.167.78");
      console.log(ipRes);
    } catch (err) {
      console.log(err);
    }
  })();

  // Confirm it's a "sight" type
  if ((payload.type as string) === "sight") {
    const linkDataObject = payload.data;
    const processedData: LinkListType = {
      href: linkDataObject.href,
      attempts: [
        {
          ip_address: ip_address,
          device_type: "device_type",
          //   ...geolocation_data,
        },
      ],
    };

    // Update insights
    await updateStats(processedData);
  }

  return { linkList };
});
