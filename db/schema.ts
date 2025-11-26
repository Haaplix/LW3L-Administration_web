import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const blogTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})