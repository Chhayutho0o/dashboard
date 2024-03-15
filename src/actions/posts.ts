"use server"

import { GET, fetchJson } from "@/base-api/request"

export const fetchPosts = async (params?: any) => {
  try {
    const { data } = await fetchJson(GET('/posts', params))

    return {
      status: "success",
      data: data.posts
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.response
    }
  }
}