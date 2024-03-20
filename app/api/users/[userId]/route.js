import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get user
export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, about: true, profileURL: true },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error in getting user !!",
      success: false,
    });
  }
}

// Delete user
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({
      message: "User deleted !!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error in deleting user !!",
      success: false,
    });
  }
}

// Update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name,
        password: password, // Remember to hash the password
        about: about,
        profileURL: profileURL,
        // Add more fields if necessary
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to update user !!",
      success: false,
    });
  }
}
