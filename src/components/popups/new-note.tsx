"use client";

import { handleAddNote } from "@/utils/handle-addnote";
import { useState } from "react";

type Props = {
  handleClose: () => void;
};

interface Note {
  title: string;
  description: string;
  tags: string[];
}

const NewNote = ({ handleClose }: Props) => {
  const [noteData, setNoteData] = useState<Note>({
    title: "",
    description: "",
    tags: [],
  });

  const [error, setError] = useState("");

  const onAddNote = async () => {
    if (!noteData.title || !noteData.description || !noteData.tags) {
      return setError("all fields are required");
    }

    const { note, addNoteErr } = await handleAddNote(noteData);

    if (addNoteErr) setError(addNoteErr);

    if (note) handleClose();
  };

  return (
    <div className="flex items-center justify-center h-screen absolute inset-0 bg-slate-900 bg-opacity-75">
      <div className="w-[25rem] p-6 md:p-8 bg-white border border-slate-300 rounded-md">
        <h3 className="font-bold text-2xl mb-6">Add New Note</h3>

        <div className="my-3 text-sm">
          <label htmlFor="title" className="block text-slate-500 mb-1">
            Note Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>
        <div className="my-3 text-sm">
          <label htmlFor="tags" className="block text-slate-500 mb-1">
            Tags <span className="text-xs">(Add multiple tags with space)</span>
          </label>
          <input
            type="text"
            id="tags"
            placeholder="Add Tags"
            onChange={(e) =>
              setNoteData({ ...noteData, tags: e.target.value.split(" ") })
            }
            className="w-full border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>

        <div className="my-3 text-sm">
          <label htmlFor="description" className="block text-slate-500 mb-1">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Add Description"
            onChange={(e) =>
              setNoteData({ ...noteData, description: e.target.value })
            }
            className="w-full max-h-[8rem] border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3 items-center justify-end mt-4">
          <button
            className="bg-slate-200 text-sm hover:bg-slate-300 transition ease-in-out text-slate-800 font-semibold py-2 px-4 rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-purple-600 text-sm hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md"
            onClick={onAddNote}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
