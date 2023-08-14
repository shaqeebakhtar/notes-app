import NoteActions from "./note-actions";

type Props = {
  note: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
  };
};

const NoteCard = ({ note }: Props) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="bg-white border border-slate-300 rounded-md p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-slate-500">
          <span>{note.createdAt.toString()}</span>
        </div>

        <NoteActions note={note} />
      </div>
      <h3 className="font-semibold">{note.title}</h3>
      <div className="my-2">
        <p className="text-slate-500 text-sm text">{note.description}</p>
      </div>
      <div className="flex gap-6 items-center mt-4 text-xs text-purple-700">
        {note.tags && note.tags.map((tag) => <span key={tag}>#{tag}</span>)}
      </div>
    </div>
  );
};

export default NoteCard;
