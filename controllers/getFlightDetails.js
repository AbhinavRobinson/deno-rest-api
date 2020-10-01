import { getFlight } from '../services/flightService.js'

export default async ({ params, response }) => {
	const FlightId = params[0]

	if (!FlightId) {
		response.status = 400
		response.body = { msg: 'Invalid Flight id' }
		return
	}

	const foundFlight = await getFlight(FlightId)
	if (!foundFlight) {
		response.status = 404
		response.body = { msg: `Flight with ID ${FlightId} not found` }
		return
	}

	response.body = foundFlight
}
