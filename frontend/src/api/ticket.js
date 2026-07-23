import { api } from "./client";

export const getTicket = async (confirmation) => {
  return api.get(`/view-ticket/${confirmation}`);
};
