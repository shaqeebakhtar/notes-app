import NoteCard from "./note-card";

type Props = {};

const Notes = (props: Props) => {
  return (
    <>
      <div className="container mx-auto px-5 py-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </>
  );
};

export default Notes;
