
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
  // email?: string,
  username: string,
  password: string
}

type Meta = {
  total: number
  perPage: number
  currentPage: number
  next: number
  totalPage: number
  previous: number
  pages: number[]
}

type Post = {
  id: number
  title: string
  body: string
  userId: number
  reactions: number
  tags: string[]
}

interface Posts extends Meta {
  posts: Post[]
}

type User = {
  id: number
  username: string
  firstName: string
  lastName: string
  age: number
  gender: string
  email: string
  phone: string
  birthDate: string
  image: string
}

interface Users extends Meta {
  users: User[]
}