'use server'
import { db } from '@/db'
import { usersTable } from '@/db/schema'
import { eq } from 'drizzle-orm'    
import { compare, hash } from 'bcryptjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function register(form: FormData) {
  const login = String(form.get('email'))
  const password = String(form.get('password'))
  await db.insert(usersTable).values({
    email: login, // short for login: login
    password: await hash(password, 10),
    Name: String(form.get('Name')),
    First_Name: String(form.get('First_Name')),
    User_Name: String(form.get('User_Name')),
  })
  console.log("reg function called")
}

export async function login(form: FormData) {
    console.log("login function called")
    const login = String(form.get('email'))
    const password = String(form.get('password'))
    const users = await db.select().from(usersTable)
    .where(eq(usersTable.email, login))
    console.log(users.length)
    console.log(compare(password, users[0].password))
    const loggedIn = users.length > 0
    ? await compare(password, users[0].password)
    : false
  
    if (loggedIn) {
        console.log("user logged in")
    const secret = process.env.SECRET
    const signature = await hash(secret + login, 10)
    const cookieStore = await cookies()
    cookieStore.set('session', `${login};${signature}`)
  }
  redirect((await headers()).get('referer') ?? '/')
}

const secret = process.env.SECRET

export async function getCurrentUser() {
  // Get the session cookie
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  if (!session) return null

  // Check the signature
  const [login, signature] = session.value.split(';')
  const correct = await compare(signature, secret + login)

  return correct ? login : null
}