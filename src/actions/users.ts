"use server"

import { GET, fetchJson } from "@/base-api/request"

export const fetchUsers = async (params: any) => {
  try {
    const { data } = await fetchJson(GET('/users', params))

    return {
      data: data.users,
      status: "success"
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.response.data
    }
  }
}

export const fetchUser = async (id: string) => {
  try {
    const data = await fetchJson(GET(`/users/${id}`, {}))
    return {
      data,
      status: "success"
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.response.data
    }
  }
}