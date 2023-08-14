import { prisma } from "@/lib/db";
import { Session } from "next-auth";

export const getUserId = async (session: Session) => {
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });

  return user?.id;
};
