export default defineEventHandler((event) => {
  return {
    hello: console.log(event),
  };
});
