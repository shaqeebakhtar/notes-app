import { prisma } from "@/lib/db";
import { hash } from "@/utils/hash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "all fields are required" },
      { status: 400 }
    );
  }

  let user = null;

  user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "email already in use, try logging in" },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await hash(password);

  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ user }, { status: 200 });
}
