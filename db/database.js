/**
 * ? About
 * * import postgres client and connects to database.
 */
import { Client } from 'https://deno.land/x/postgres/mod.ts'

/**
 * ? About
 * * import postgres server config
 */
const cfg = JSON.parse(Deno.readTextFileSync('./config.json')).db
/**
 * ! Connection Constructor Class
 */
class Database {
	/**
	 * ? About
	 * * Calls Connection Promise
	 */
	constructor() {
		this.connect()
	}

	/**
	 * ! Connection
	 * * connects client to postgres database.
	 */

	async connect() {
		this.client = new Client({
			user: cfg.user,
			database: cfg.database,
			hostname: cfg.hostname,
			password: cfg.password,
			port: cfg.port,
		})

		await this.client.connect()
	}
}

/**
 * ? About
 * * Exports Construction Class to local enviroment
 */
export default new Database().client
