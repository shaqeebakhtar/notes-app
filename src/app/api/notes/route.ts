import { prisma } from "@/lib/db";
import { getUserId } from "@/utils/get-userId";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  const userId = await getUserId(session!);

  const notes = await prisma.note.findMany({
    where: {
      authorId: userId,
    },
  });

  return NextResponse.json({ notes });
}
