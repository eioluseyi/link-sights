import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList } from "~~/variables/variables.server";

const corsHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Origin": "*",
};

export const config = { path: "/api/ls" };

export default async (request: any, context: { ip: any; geo: any }) => {
  // This is where we retrieve the link data object
  const payload = await request.json();

  const ip = context.ip;

  console.log(ip);

  const geolocation_data = context.geo;

  console.log(geolocation_data);

  // Confirm it's a "sight" type
  if ((payload.type as string) === "sight") {
    const linkDataObject = payload.data;
    const processedData: LinkListType = {
      href: linkDataObject.href,
      attempts: [
        {
          ip_address: ip,
          device_type: "device_type",
          ...geolocation_data,
        },
      ],
    };

    // Update insights
    await updateStats(processedData);
  }

  return { linkList };
  // return Response. .json(
  //   {
  //     ...context.geo,
  //     ip: context.ip,
  //   },
  //   // Add a second parameter to `Response.json`
  //   // where we can provide our CORS headers
  //   {
  //     headers: corsHeaders,
  //   }
  // );
};
