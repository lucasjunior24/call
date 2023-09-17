import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    username: string
    name: string
    email: string
    avatar_url: string
    created_at: string

    // accounts Account[]
    // sessions Session[]
  }
}
