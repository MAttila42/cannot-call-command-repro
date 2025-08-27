// Or abuse the query function

import { json } from '@sveltejs/kit';
import { addDataAlt2 } from '$lib/remote/data.remote';

export async function POST({ request }) {
  const data = await request.json();
  addDataAlt2(data.title);
  return json({ success: true });
}
