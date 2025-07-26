// pages/api/login.js

export default function handler(req, res) {
  const clientId = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = encodeURIComponent(process.env.TIKTOK_REDIRECT_URI);
  const state = Math.random().toString(36).substring(2, 15); // optional: random state
  const scope = 'user.info.basic';

  const authUrl = `https://www.tiktok.com/v2/auth/authorize/` +
    `?client_key=${clientId}` +
    `&response_type=code` +
    `&scope=${scope}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${state}`;

  res.redirect(authUrl);
}
