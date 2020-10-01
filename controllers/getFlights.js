import { getFlights } from "../services/flightService.js";

export default async ({ response }) => {
  response.body = await getFlights();
};