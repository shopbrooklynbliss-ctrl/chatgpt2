// pages/api/login.js

export default function handler(req, res) {
  const clientId = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = encodeURIComponent(process.env.TIKTOK_REDIRECT_URI);
  const state = 'autotok_state'; // You can generate a random state string if needed
  const scope = 'user.info.basic';

  const authUrl = `https://www.tiktok.com/v2/auth/authorize/` +
    `?client_key=${clientId}` +
    `&response_type=code` +
    `&scope=${scope}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${state}`;

  res.redirect(authUrl);
}

