/**
 * responseObject = {
 *  link: string;
 *  api_key: string;
 *  [others: string]: string;
 * }
 *
 * - * FOR ALL LINKS *
 * - initialize response object
 * - stringify response object
 * - encode response object to base64
 * - add response object to link string as `[base_url]/ls/[encodedResponseObject]`
 * - replace link href with generated link
 */

const newLink = ({ href }) => {
  const responseObject = {
    link: href,
    api_key: "API_KEY_EXPOSED",
  };

  const responseString = JSON.stringify(responseObject);
  const responseBase64 = btoa(responseString);
  const responseLink = `https://link-sights.vercel.app/ls/${responseBase64}`;

  return responseLink;
};

document.querySelectorAll("a").forEach(
  (el) =>
    (el.onclick = (evt) => {
      evt.preventDefault();
      window.location = newLink(el.href);
    })
);
