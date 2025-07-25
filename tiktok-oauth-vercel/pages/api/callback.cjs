import axios from 'axios';

export default async function handler(req, res) {
  const code = req.query.code;
  if (!code) return res.status(400).send("Missing code");

  try {
    const tokenRes = await axios.post('https://open.tiktokapis.com/v2/oauth/token', {
      client_key: process.env.TIKTOK_CLIENT_KEY,
      client_secret: process.env.TIKTOK_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.TIKTOK_REDIRECT_URI
    });

    res.status(200).json(tokenRes.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
