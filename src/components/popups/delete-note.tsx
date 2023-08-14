import { handleDeleteNote } from "@/utils/handle-deletenote";
import React from "react";

type Props = {
  handleClose: () => void;
  noteId: string;
};

const DeleteNote = ({ handleClose, noteId }: Props) => {
  const onDeleteNote = async () => {
    const deletedNote = await handleDeleteNote(noteId);

    if (deletedNote) handleClose();
  };

  return (
    <div className="flex items-center justify-center h-screen absolute inset-0 bg-slate-900 bg-opacity-75">
      <div className="w-[25rem] p-6 md:p-8 bg-white border border-slate-300 rounded-md">
        <h3 className="font-bold text-2xl mb-6">Delete Note</h3>

        <div className="my-3 text-sm">
          <p>
            Are you sure? That you want to delete this note. This action can
            {`'`}t be undone and will permanently delete your note.
          </p>
        </div>

        <div className="flex gap-3 items-center justify-end mt-6">
          <button
            className="bg-slate-200 text-sm hover:bg-slate-300 transition ease-in-out text-slate-800 font-semibold py-2 px-4 rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-sm hover:bg-red-600 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md"
            onClick={onDeleteNote}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNote;
