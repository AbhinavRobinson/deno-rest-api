/**
 * * Handles routes to function
 * 
 * ? About
 * @param getFlights: Returns Flight Validity
 * @param getFlightDetails: Return Flight Details (if valid)
 * @param createFlight: Create new Flights (if not existing)
 * @param updateFlight: Update Flight Record (if valid)
 * @param deleteFlight: Remove Flight Record (if valid)
 */

/**
 * ? About
 * * Import Router() from Oak, this will bind our paths/routes to js functions.
 */
import { Router } from "https://deno.land/x/oak/mod.ts";

/**
 * ? About
 * * RestApi functions, read ln.4 for description.
 */
import getFlights from "./controllers/getFlights.js";
import getFlightDetails from "./controllers/getFlightDetails.js";
import createFlight from "./controllers/createFlight.js";
import updateFlight from "./controllers/updateFlight.js";
import deleteFlight from "./controllers/deleteFlight.js";

/**
 * ! Initialize Router
 */
const router = new Router();

/**
 * ? About
 * * binds http routes to functions, define http request type, for function description, read ln.4
 */
router
  .get("/Flights", getFlights)
  .get("/Flights/:id", getFlightDetails)
  .post("/Flights", createFlight)
  .put("/Flights/:id", updateFlight)
  .delete("/Flights/:id", deleteFlight);

/**
 * ? About
 * * Export Route to local enviorment, import in ./index.js
 */
export default router;