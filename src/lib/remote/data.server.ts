import * as db from '$lib/server/database';

// As a workaround, we can move the logic in a server file
export function addDataAlt(title: string) {
  db.data.push({
    id: db.data.length + 1,
    title,
    slug: '...',
    published_at: new Date()
  });
};
