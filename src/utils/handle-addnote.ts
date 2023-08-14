interface Note {
  title: string;
  description: string;
  tags: string[];
}

export const handleAddNote = async (noteData: Note) => {
  const response = await fetch("/api/note", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });

  const data = await response.json();

  return { note: data.note, addNoteErr: data.error };
};
