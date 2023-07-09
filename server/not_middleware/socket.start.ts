import { WebSocketServer } from "ws";
import { updateStats } from "~~/helpers/helpers.server";
import { LinkListType } from "~~/types/types.server";
import { linkList, sockets, wsInstance } from "~~/variables/variables.server";

export default defineEventHandler(() => {
  console.log("Running Middleware");

  if (!wsInstance.value) {
    // Sart the server
    const server = new WebSocketServer({
      path: "/socket",
      port: 3300,
    });

    // Set server to wsInstance object
    wsInstance.value = server;

    console.log(
      `📡 Server started on http://localhost:${wsInstance.value.options.port}${wsInstance.value.options.path}`
    );

    server.on(
      "connection",
      function (socket: { on: (arg0: string, arg1: any) => void }, req) {
        // When a new connection is made
        console.log("🤝 New client connection", req.socket.remoteAddress);
        sockets.push(socket);

        socket.on("message", async function (msg: string) {
          // This is where we retrieve the link data object
          const msgData = JSON.parse(msg);

          // Confirm it's a "sight" type
          if ((msgData.type as string) === "sight") {
            const linkDataObject = msgData.data;
            const processedData: LinkListType = {
              href: linkDataObject.href,
              attempts: [
                {
                  ip_address: "ip_address",
                  device_type: "device_type",
                },
              ],
            };

            // Update insights
            await updateStats(processedData);

            sockets.forEach((s) => s.send(JSON.stringify(linkList)));
          }
        });

        // When a socket closes, or disconnects, remove it from the array.
        socket.on("close", function () {
          const newSocketList = sockets.filter((s) => s !== socket);
          sockets.length = 0;
          newSocketList.forEach(sockets.push);

          console.log("Sockets: ", sockets);
        });
      }
    );
  } else {
    console.log(
      `👀 Socket server already running on :${wsInstance.value.options.port}${wsInstance.value.options.path}`,
      `With properties: ${JSON.stringify(wsInstance.value.options)}`
    );
  }
});

/** BASIC ------------------------>
 *
 * - ✅ Client: connect over socket
 * - ✅ Client: on click, send attempt to link (with owner id) to backend via socket
 * - ✅ Backend: process data, counting clicks per link
 * - ✅ Backend: save data in variable (DB)
 * - ✅ Backend: broadcast updates over socket and make data available through GET request
 * - ⬜️ Write tests
 */

/** INTERMEDIATE ------------------------>
 *
 * - ✅ Admin: view link updates over socket or GET request
 * - ⬜️ Admin: plot graph and run analytics on front end
 * - ⬜️ Backend: store data in database
 */

/** ADVANCED ------------------------>
 *
 * - ⬜️ Add IP address tracking
 * - ⬜️ Add location tracking
 * - ⬜️ Add device type tracking
 * - ⬜️ Add time (+timezone) tracking
 * - ⬜️ Add click through rate tracking
 * - ⬜️ Add other info tracking
 */
