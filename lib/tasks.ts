'use server'

import { db } from '@/db'
import { blogTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getArticles() {
  return await db.select().from(blogTable)
}

export async function addArticles(form: FormData) {
  await db.insert(blogTable).values({
    title: String(form.get('title')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editTask(form: FormData) {
  await db
    .update(blogTable)
    .set({
      title: String(form.get('title')),
      done: form.get('done') === 'on',
    })
    .where(eq(blogTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeTask(id: string) {
  await db.delete(blogTable).where(eq(blogTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}