// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/app/helper/responseMessage";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // get user using id

    const tasks = await prisma.posts.find({
      userId: userId,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}
