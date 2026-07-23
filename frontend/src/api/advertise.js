import { api } from "./client";

export const getAdvertises = async () => {
  return api.get("/advertises");
};
