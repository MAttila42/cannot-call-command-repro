// Expose the remote functions through API endpoints to use in a separate project (e.g. an app)

import { json } from '@sveltejs/kit';
import { addData, getData } from '$lib/remote/data.remote';

export async function GET() {
  return json(await getData());
}

export async function POST({ request }) {
  const data = await request.json();
  await addData(data.title);
  return json({ success: true });
}
