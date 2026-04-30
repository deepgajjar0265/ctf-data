export default function handler(req, res) {
  const FLAG = "FLAG{flag_is_07656c6c}";

  if (req.method === "POST") {
    const { flag } = req.body;

    if (flag === FLAG) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(200).json({ success: false });
    }
  }

  res.status(405).send("Method Not Allowed");
}