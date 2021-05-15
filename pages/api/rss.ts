import Parser from "rss-parser"
import Cors from "cors"
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next"

const parser = new Parser()

// Initializing the cors middleware
const cors = Cors({
    methods: ["GET", "HEAD"],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: unknown) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

const rss: NextApiHandler = async (request, response) => {
    // Run the middleware
    await runMiddleware(request, response, cors)

    let { url } = request.query
    url = typeof url === "string" ? url : url?.[0]

    if (!url) return response.status(404).send(new Error("Missing url."))

    const feed = await parser.parseURL(url)
    return response.status(200).send(feed)
}

export default rss
