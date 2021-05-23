import { VercelRequest, VercelResponse } from "@vercel/node"

const hello = (request: VercelRequest, response: VercelResponse) => {
    const { name = "World" } = request.query
    response.status(200).send(`Hello ${name}!`)
}

export default hello
