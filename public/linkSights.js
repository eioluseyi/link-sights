const isReady = {
  socket: false,
  all: () => isReady.socket && document.readyState !== "loading",
};

const parseData = ({ href }) => {
  const responseObject = {
    href,
    api_key: "API_KEY_EXPOSED",
  };
  return responseObject;
};

// const observer = new IntersectionObserver(
//   function (entries) {
//     console.log(entries);
//     if (entries[0].isIntersecting === true)
//       console.log("Element is fully visible in screen");
//     if (entries[0].isIntersecting === false)
//       console.log("Element has gone from screen");
//   },
//   { threshold: [1] }
// );

// observer.observe(document.querySelector("img.attachment-full"));

const sendRequest = ({ payload }) => {
  return fetch("https://linksights.netlify.app/api/ls", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const activateLinks = () => {
  document.querySelectorAll("a").forEach((el) => {
    const elClone = el.cloneNode(true);

    el.onclick = async (evt) => {
      evt.preventDefault();

      const res = await sendRequest({
        payload: { type: "sight", data: parseData({ href: el.href }) },
      });

      elClone.click();
    };
  });
};

activateLinks();
