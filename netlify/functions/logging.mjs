export default async (req) => {
    console.log(req);
    return new Response(`Hello There!`);
};

export const config = {
    path: "/log"
};