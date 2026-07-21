import { api } from "./client";

export const bookTicket = async (bookingData) => {
  return api.post("/book", bookingData);
};
