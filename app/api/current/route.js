import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
   
  if(!authToken) {
    return NextResponse.json({
      message : "user is not logged in"
    })
  }

  try {
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data)
    const user = await prisma.user.findUnique({
      where: { id: data.id },
      select: { password: true }
    });
    return NextResponse.json(user);
  } catch (error) {
    // Handle invalid or expired token
    console.error("Error:", error);
    return NextResponse.error(new Error("Invalid or expired token"), { status: 401 });
  } finally {
    await prisma.$disconnect();
  }
}
