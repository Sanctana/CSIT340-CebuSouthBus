import { api } from "./client";

export const getSchedules = async (destination, date, passenger) => {
  const params = new URLSearchParams();
  if (destination) params.append("destination", destination);
  if (date) params.append("date", date); // ← add this line
  if (passenger) params.append("passengerCount", passenger);
  return api.get(`/bus-schedule?${params.toString()}`);
};
