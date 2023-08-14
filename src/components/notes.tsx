import { getNotes } from "@/utils/get-notes";
import NoteCard from "./note-card";
import { useEffect, useState } from "react";

interface Note {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getNotes();
      setNotes(data.notes);
    })();
  }, [notes]);

  return (
    <>
      <div className="container mx-auto px-5 py-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes &&
          notes.map((note) => {
            return <NoteCard key={note.id} note={note} />;
          })}
      </div>
    </>
  );
};

export default Notes;
