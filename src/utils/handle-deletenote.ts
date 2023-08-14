export const handleDeleteNote = async (noteId: string) => {
  const response = await fetch("/api/note", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteId),
  });

  const data = await response.json();

  return data;
};
