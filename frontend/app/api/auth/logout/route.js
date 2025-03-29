export async function POST() {
  return Response.json(
    { message: "Logged out" },
    {
      status: 200,
      headers: {
        "Set-Cookie":
          "token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 UTC",
      },
    }
  );
}
