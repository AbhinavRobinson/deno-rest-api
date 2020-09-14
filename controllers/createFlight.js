import { createFlight } from "../services/flightService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid flight data" };
    return;
  }

  const {
    value: { FlightNo, Airlines, OnTime, Time, Dep, Arr }
  } = await request.body();

  if (!FlightNo) {
    response.status = 422;
    response.body = { msg: "Incorrect flight data. FlightNo are required" };
    return;
  }

  const flightId = await createFlight({ FlightNo, Airlines, OnTime, Time, Dep, Arr });

  response.body = { msg: "flight created", flightId };
};