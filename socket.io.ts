import io from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const socket = io(useRuntimeConfig().url);

  nuxtApp.provide("io", socket);

  //   return {
  //     provide: {
  //       io: socket,
  //     },
  //   };
});
