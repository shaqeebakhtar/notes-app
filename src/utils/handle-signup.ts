interface singupData {
  name: string;
  email: string;
  password: string;
}

export const handleSignup = async (singupData: singupData) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(singupData),
  });

  const data = await response.json();

  return { user: data.user, singupErr: data.error };
};
