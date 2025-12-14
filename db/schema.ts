import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'
import { title } from 'process'
import { use } from 'react'

export const blogTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})

export const OpinionTable = pgTable('opinions', {
  id: uuid().defaultRandom().primaryKey(),
  username: text().notNull(),
  title: text().notNull(),
  content: text().notNull(),
})



export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  email: text().notNull().unique(),
  password: text().notNull(),
  Name: text().notNull(),
  First_Name: text().notNull(),
  User_Name: text().notNull(),
})