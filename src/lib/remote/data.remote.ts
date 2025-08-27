// Create remote functions for convenient use inside this project

import { command, query } from '$app/server';
import { addDataAlt } from './data.server';
import * as db from '$lib/server/database';
import { z } from 'zod';

export const getData = query(async () => {
  const posts = db.data;
  return posts;
});

export const addData = command(
  z.string(),
  async (title: string) => {
    db.data.push({
      id: db.data.length + 1,
      title,
      slug: '...',
      published_at: new Date()
    });
    await getData().refresh();
  }
);

// For the alternative approach, we can just wrap around the server function
export const addDataAlternative = command(
  z.string(),
  async (title: string) => {
    addDataAlt(title);
    await getData().refresh();
  }
);

// Or we can use only queries because they work from API endpoints
export const addDataAlt2 = query(
  z.string(),
  async (title: string) => {
    db.data.push({
      id: db.data.length + 1,
      title,
      slug: '...',
      published_at: new Date()
    });
    await getData().refresh();
  }
)
