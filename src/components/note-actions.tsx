"use client";

import { useState } from "react";
import EditNote from "./popups/edit-note";
import DeleteNote from "./popups/delete-note";

type Props = {
  note: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
  };
};

const NoteActions = ({ note }: Props) => {
  const [editNoteModal, setEditNoteModal] = useState<boolean>(false);
  const [deleteNoteModal, setDeleteNoteModal] = useState<boolean>(false);

  const handleClose = () => {
    setEditNoteModal(false);
    setDeleteNoteModal(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <button
          className="rounded-full p-2 bg-red-100 hover:bg-red-200 transition ease-in-out"
          onClick={() => setDeleteNoteModal(true)}
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
            className="lucide lucide-trash-2 text-red-600"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>

        <button
          className="rounded-full p-2 bg-slate-100 hover:bg-slate-200 transition ease-in-out"
          onClick={() => setEditNoteModal(true)}
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
            className="lucide lucide-pencil-line text-slate-600"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            <path d="m15 5 3 3" />
          </svg>
        </button>
      </div>
      {editNoteModal && <EditNote handleClose={handleClose} note={note} />}
      {deleteNoteModal && (
        <DeleteNote handleClose={handleClose} noteId={note.id} />
      )}
    </>
  );
};

export default NoteActions;
