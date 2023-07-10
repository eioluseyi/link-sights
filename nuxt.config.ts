export default {
  proxy: {
    "/api": {
      target: "/api",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
};
