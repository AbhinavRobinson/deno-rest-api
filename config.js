/**
 * * Exports defined ports
 *
 * ? About
 * Ports will be passed to listen() in ./index.js
 *
 * @param APP_HOST: Recieve args from cli, or defalut to localhost
 * @param APP_PORT: Recieve args from cli, or defalut to 4000
 */

export const APP_HOST = Deno.env.get('APP_HOST') || '127.0.0.1'
export const APP_PORT = Deno.env.get('APP_PORT') || 4000
