import { NextResponse } from 'next/server';

export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/klarna-redirect')) {
        return NextResponse.redirect("http://wikipedia.org", { status: 303 })
    };

    if (request.nextUrl.pathname.startsWith('/aws-metadata')) {
        return NextResponse.redirect("http://169.254.169.254", { status: 302 })
    };

    if (request.nextUrl.pathname.startsWith('/aws-metadata-ssl')) {
        return NextResponse.redirect("https://169.254.169.254", { status: 302 })
    };
};

export const config = {
    matcher: ['/klarna-redirect', '/aws-metadata', '/aws-metadata-ssl']
};