import { getResponseMessage } from "../../../helper/responseMessage";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get single task
export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task !!", 404, false);
  }
}

// Update task
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;
    const { title, content, status } = await request.json();

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title: title,
        content: content,
        status: status,
      },
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in updating task !! ", 500, false);
  }
}

// Delete task
export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    return getResponseMessage("Task Deleted !!", 200, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in deleting Task !", 500, false);
  }
}
