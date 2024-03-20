import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  console.log("login api");
  const { email, password } = await request.json();

  try {
    // 1. Get user
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User not found !!");
    }

    // 2. Password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password not matched !!");
    }

    // 3. Generate token
    const token = jwt.sign(
      {
        _id: user.id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // 4. Create NextResponse - set cookie
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
