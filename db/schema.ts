import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { title } from 'process'
import { use } from 'react'

export const OpinionTable = pgTable('opinion', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  opinion: text().notNull(),
  done: boolean().default(false).notNull(),
})





export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  email: text().notNull().unique(),
  password: text().notNull(),
  Last_Name: text().notNull(),
  First_Name: text().notNull(),
  User_Name: text().notNull(),
})