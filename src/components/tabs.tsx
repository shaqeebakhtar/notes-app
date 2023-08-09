"use client";

import NewNote from "@/components/popups/new-note";
import { useState } from "react";

type Props = {};

const Tabs = (props: Props) => {
  const [newNoteModal, setNewNoteModal] = useState<boolean>(false);

  const handleClose = () => {
    setNewNoteModal(false);
  };

  return (
    <>
      <div className="container mx-auto px-5 pt-8 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-xl">All Notes</h3>
        </div>
        <button
          className="flex gap-1 items-center bg-purple-600 text-sm hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md"
          onClick={() => setNewNoteModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add new note
        </button>
      </div>
      {newNoteModal && <NewNote handleClose={handleClose} />}
    </>
  );
};

export default Tabs;
