import { Icons } from "@/components/icons"

export type NavItem = {
  title: string,
  href: string,
  items?: {
    title: string,
    href: string
  }[]
}

export type MainNavItem = NavItem

export type DashboardConfig = {
  mainNav: MainNavItem[]
}

type AuthForm = {
  username: string,
  password: string
}

type Data = {
  total: number
  skip: number
  limit: number
}

type Post = {
  id: number
  title: string
  body: string
  userId: number
  reactions: number
  tags: string[]
}

interface Posts extends Data {
  posts: Post[]
}

type User = {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  email: string
  phone: string
  birthDate: string
  image: string
}

interface Users extends Data {
  users: User[]
}