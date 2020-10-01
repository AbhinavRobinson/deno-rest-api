/**
 * ! Returns 404 on Invalid Request
 */

export default ({ response }) => {
	response.status = 404
	response.body = { msg: 'Not Found' }
}
