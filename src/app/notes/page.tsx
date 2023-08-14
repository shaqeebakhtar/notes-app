"use client";
import Header from "@/components/header";
import Notes from "@/components/notes";
import Tabs from "@/components/tabs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  if (session === null) return router.push("/auth/login");

  return (
    <>
      <Header user={session?.user!} />
      <Tabs />
      <Notes />
    </>
  );
};

export default Page;
