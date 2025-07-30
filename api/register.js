export default async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;

  // hash password (optional but recommended)
  const hashed = password; // <- Use bcrypt in real cases

  const { Client } = require("pg");
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();
  await client.query(
    "INSERT INTO users (username, password) VALUES ($1, $2)",
    [username, hashed]
  );
  await client.end();

  return res.status(200).json({ success: true });
};