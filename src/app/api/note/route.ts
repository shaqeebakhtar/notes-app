import { prisma } from "@/lib/db";
import { getUserId } from "@/utils/get-userId";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  const userId = await getUserId(session!);

  const { title, description, tags } = await request.json();

  if (!title || !description || !tags) {
    return NextResponse.json(
      { error: "all fields are required!" },
      { status: 400 }
    );
  }

  const note = await prisma.note.create({
    data: {
      title,
      description,
      tags,
      authorId: userId!,
    },
  });

  return NextResponse.json({ note });
}

export async function DELETE(request: NextRequest) {
  const noteId = await request.json();

  const note = await prisma.note.delete({
    where: {
      id: noteId,
    },
  });

  return NextResponse.json({ note });
}

export async function PUT(request: NextRequest) {
  const { title, description, tags, id } = await request.json();

  const note = await prisma.note.update({
    data: {
      title,
      description,
      tags,
    },
    where: {
      id,
    },
  });

  return NextResponse.json({ note });

  return NextResponse.json({ note });
}
