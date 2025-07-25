import { URLSearchParams } from 'url';

export default async function handler(req, res) {
  const query = new URLSearchParams({
    client_key: process.env.TIKTOK_CLIENT_KEY,
    response_type: 'code',
    scope: 'user.info.basic,video.list,video.upload',
    redirect_uri: process.env.TIKTOK_REDIRECT_URI,
    state: 'autotok_state_123'
  });

  res.redirect(`https://www.tiktok.com/v2/auth/authorize?${query.toString()}`);
}