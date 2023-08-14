interface Note {
  title: string;
  description: string;
  tags: string[];
}

export const handleEditNote = async (noteData: Note) => {
  const response = await fetch("/api/note", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });

  const data = await response.json();

  return { note: data.note, editNoteErr: data.error };
};
