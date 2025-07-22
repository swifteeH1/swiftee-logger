export default async (request, context) => {
    request.headers.set("X-Swiftee","Hello");
    request.headers.set("Access-Control-Allow-Origin","*")
}