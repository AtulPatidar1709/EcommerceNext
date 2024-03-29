import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");

  const authToken = request.cookies.get("authToken")?.value;

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/Login" ||
    request.nextUrl.pathname == "/Signup";

  if (loggedInUserNotAccessPaths) {
    // access not secured route
    if (authToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    // accessing secured route

    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied !!",
            success: false,
          },
          {
            status: 401,
          }
        );
      }

      return NextResponse.redirect(new URL("/Login", request.url));
    } else {
      // varify...
    }
  }

  console.log(authToken);

  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/Login",
    "/Signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
