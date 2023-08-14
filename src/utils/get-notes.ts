export const getNotes = async () => {
  const response = await fetch("/api/notes", {
    method: "GET",
  });

  const data = await response.json();

  return data;
};
