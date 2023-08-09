import React from "react";

type Props = {
  handleClose: () => void;
};

const EditNote = ({ handleClose }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen absolute inset-0 bg-slate-900 bg-opacity-75">
      <div className="w-[25rem] p-6 md:p-8 bg-white border border-slate-300 rounded-md">
        <h3 className="font-bold text-2xl mb-6">Update Note</h3>

        <div className="my-3 text-sm">
          <label htmlFor="title" className="block text-slate-500 mb-1">
            Note Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
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
            className="w-full max-h-[8rem] border border-slate-300 rounded-md py-2 px-4 focus:outline-purple-700"
          />
        </div>

        <div className="flex gap-3 items-center justify-end mt-4">
          <button
            className="bg-slate-200 text-sm hover:bg-slate-300 transition ease-in-out text-slate-800 font-semibold py-2 px-4 rounded-md"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="bg-purple-600 text-sm hover:bg-purple-700 transition ease-in-out text-white font-semibold py-2 px-4 rounded-md">
            Update Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
