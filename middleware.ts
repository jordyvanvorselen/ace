import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/") {
        return NextResponse.next();
    }

    if (request.cookies.get("api-token")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
};
