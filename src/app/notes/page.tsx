import Header from "@/components/header";
import Notes from "@/components/notes";
import Tabs from "@/components/tabs";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Header />
      <Tabs />
      <Notes />
    </>
  );
};

export default Page;
