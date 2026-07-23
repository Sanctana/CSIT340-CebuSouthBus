import { api } from "./client";

export const getTicket = async (confirmation) => {
  return api.get(`/ticket/${confirmation}`);
};

export const updateTicket = async (confirmation, updatedData) => {
  return api.put(`/ticket/${confirmation}`, updatedData);
};
