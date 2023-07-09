import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList } from "~~/variables/variables.server";

export default defineEventHandler(async (event) => {
  // This is where we retrieve the link data object
  const payload = await readBody(event);

  console.log(payload);

  const headers =
    event.node.req && event.node.req.headers
      ? Object.assign({}, event.node.req.headers)
      : {};
  const xForwardedFor = headers["x-forwarded-for"];
  console.log(xForwardedFor);

  // Confirm it's a "sight" type
  if ((payload.type as string) === "sight") {
    const linkDataObject = payload.data;
    const processedData: LinkListType = {
      href: linkDataObject.href,
      attempts: [
        {
          ip_address: xForwardedFor?.toString(),
          device_type: "device_type",
        },
      ],
    };

    // Update insights
    await updateStats(processedData);
  }

  return linkList;
});
