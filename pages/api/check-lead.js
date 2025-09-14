// Em produção, substitua por banco real (Mongo, Supabase, Firebase)
let fakeDB = []; // array temporário só para teste

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const isReturning = fakeDB.includes(email);

    if (!isReturning) {
      fakeDB.push(email); // salva lead novo
    }

    return res.status(200).json({ isReturning });
  }

  res.status(405).json({ message: "Method not allowed" });
}
