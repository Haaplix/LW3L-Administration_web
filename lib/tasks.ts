'use server'

import { db } from '@/db'
import { OpinionTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getOpinion() {
  return await db.select().from(OpinionTable)
}

export async function addOpinion(form: FormData) {
  await db.insert(OpinionTable).values({
    title: String(form.get('Title')),
    opinion: String(form.get('opinion')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editOpinion(form: FormData) {
  await db
    .update(OpinionTable)
    .set({
      title: String(form.get('title')),
      opinion: String(form.get('opinion')),
      done: form.get('done') === 'on',
    })
    .where(eq(OpinionTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeOpinion(FormData: FormData) {
  const id = FormData.get("id") as string;
  if (!id) throw new Error("Missing id");

  await db.delete(OpinionTable).where(eq(OpinionTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}