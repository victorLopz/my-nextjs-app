// pages/api/otp.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { otp } = req.body;

    // Aquí puedes integrar tu servicio de validación OTP
    if (otp === "123456") {
      // Supongamos que el OTP correcto es "123456"
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "OTP incorrecto" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
