export async function fetchUser(): Promise<void> {
  try {
    const response = await fetch("http://localhost:3001/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }

    const user = await response.text();
    console.log(user);
  } catch (error) {
    console.log("error fetching user:", error);
  }
}
