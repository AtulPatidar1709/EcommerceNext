import { getResponseMessage } from "../../helper/responseMessage";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Get all tasks
export async function GET(request) {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data !!", 404, false);
  }
}

// Create task
export async function POST(request) {
  const { title, content, status } = await request.json();

  // Fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data.id);

  try {
    const createdTask = await prisma.task.create({
      data: {
        title: title,
        content: content,
        userId: data.id,
        status: status,
      },
    });
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    console.log("my message");
    return getResponseMessage("Failed to create Task !! ", 500, false);
  }
}
