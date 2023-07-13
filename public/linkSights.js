const isReady = {
  socket: false,
  all: () => isReady.socket && document.readyState !== "loading",
};

const parseData = ({ href }) => {
  const responseObject = {
    href,
  };
  return responseObject;
};

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
