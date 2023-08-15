import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { hash } from "@/utils/hash";
import NextAuth from "next-auth";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
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
  //   adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
