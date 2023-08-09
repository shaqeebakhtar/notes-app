import NoteActions from "./note-actions";

type Props = {};

const NoteCard = (props: Props) => {
  return (
    <div className="bg-white border border-slate-300 rounded-md p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-slate-500">
          <span>27th Aug, 2023</span>
        </div>

        <NoteActions />
      </div>
      <h3 className="font-semibold">Note Title</h3>
      <div className="my-2">
        <p className="text-slate-500 text-sm text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nisi
          ipsum asperiores harum delectus fuga, iure et laudantium distinctio,
          ut soluta blanditiis dolorum accusamus placeat.
        </p>
      </div>
      <div className="flex gap-6 items-center mt-4 text-xs text-purple-700">
        <span>#note-tag</span>
        <span>#note-tag</span>
        <span>#note-tag</span>
        <span>#note-tag</span>
      </div>
    </div>
  );
};

export default NoteCard;
