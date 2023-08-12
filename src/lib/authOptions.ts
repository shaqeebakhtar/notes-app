import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { hash } from "@/utils/hash";

export const authOptions = {
  adapters: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        const hashedPassword = await hash(credentials?.password as string);

        if (user && user.password === hashedPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};
