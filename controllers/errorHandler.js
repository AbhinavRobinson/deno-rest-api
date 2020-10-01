/**
 * ! Returns 500 for Missed Promises and outputs error.
 */

export default async ({ response }, nextFn) => {
	try {
		await nextFn()
	} catch (err) {
		response.status = 500
		response.body = { msg: err.message }
	}
}
