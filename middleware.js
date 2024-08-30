import { NextResponse } from 'next/server';

export function middleware(request) {
    return NextResponse.redirect("https://wikipedia.org", { status: 303 })
};

export const config = {
    matcher: '/klarna'
};