import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  console.log("Dados recebidos do quiz:", data);

  // Exemplo: salvar no banco (Prisma, Mongo, Supabase, etc.)
  // await db.responses.create({ data });

  return NextResponse.json({ success: true });
}