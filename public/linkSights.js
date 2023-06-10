/**
 * responseObject = {
 *  link: string;
 *  api_key: string;
 *  [others: string]: string;
 * }
 *
 *   * FOR ALL LINKS *
 * - initialize response object
 * - stringify response object
 * - encode response object to base64
 * - add response object to link string as `[base_url]/ls/[encodedResponseObject]`
 * - replace link href with generated link
 */

const isReady = {
  socket: false,
  all: () => isReady.socket && document.readyState !== "loading",
};

const parseData = ({ href }) => {
  const responseObject = {
    href,
    api_key: "API_KEY_EXPOSED",
  };

  // const responseString = JSON.stringify(responseObject);
  // const responseBase64 = btoa(responseString);
  // const responseLink = `https://link-sights.vercel.app/ls/${responseBase64}`;

  return responseObject;
};

const socket = new WebSocket("ws://localhost:3300/socket");

socket.onerror = (err) =>
  console.log(`The was an error: ${JSON.stringify(err)}`);

socket.onopen = (evt) => console.log("Log connection to server***", evt);

socket.addEventListener("open", () => {
  isReady.socket = true;
  console.log("We are connected", isReady.all());
});

const activateLinks = () => {
  document.querySelectorAll("a").forEach((el) => {
    const elClone = el.cloneNode(true);

    el.onclick = (evt) => {
      evt.preventDefault();
      socket.send(
        JSON.stringify({ type: "sight", data: parseData({ href: el.href }) })
      );

      elClone.click();
    };
  });
};

activateLinks();
