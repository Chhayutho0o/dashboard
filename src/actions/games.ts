"use server"

import { GET, fetchJson } from "@/base-api/request"
import { getCookies } from "@/utils/cookies"

export const fetchGames = async (params: any) => {
  try {
    const header = await getCookies()
    const { data: { data, meta } } = await fetchJson(GET('/v1/admins/games', params, header?.value.token))

    return {
      status: "success",
      data,
      meta
    }
  } catch (error: any) {
    return {
      status: "error",
      message: error.response.data.message
    }
  }
}