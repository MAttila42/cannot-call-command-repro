// Export the alternative server function to avoid the error

import { json } from '@sveltejs/kit';
import { addDataAlt } from '$lib/remote/data.server';

export async function POST({ request }) {
  const data = await request.json();
  addDataAlt(data.title);
  return json({ success: true });
}
