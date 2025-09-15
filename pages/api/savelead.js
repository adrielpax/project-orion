// pages/api/saveLead.js
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const { name, email } = req.body;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Leads!A:B",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, new Date().toISOString()]],
      },
    });

    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}
