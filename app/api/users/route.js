import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

// Get request function
export async function GET(request) {
  try {
    const users = await prisma.user.findMany({
      select: { name: true, email: true, about: true, profileURL: true },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to get users",
      success: false,
    });
  }
}

// Post request function
// Create user
export async function POST(request) {
  // Fetch user detail from request
  const { name, email, password, about, profileURL } = await request.json();

  try {
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

    // Create user using Prisma
    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        about: about,
        profileURL: profileURL,
      },
    });

    return NextResponse.json(createdUser, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create user !!",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
