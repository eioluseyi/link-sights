import { linkList } from "~~/variables/variables.server";

export default defineEventHandler(() => {
  const response = linkList;
  return response;
});
