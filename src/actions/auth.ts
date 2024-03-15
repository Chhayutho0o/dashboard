"use server"

import { DELETE, GET, POST, fetchJson, removeAuthToken, setAuthToken } from "@/base-api/request"
import { getCookies, setCookies, removeCookie } from "@/utils/cookies"

export const fetchProfile = async () => {
  const headers = await getCookies()
  const tokenValue = headers?.value.token

  if (!tokenValue) return { status: 'error' }

  try {
    const { data } = await fetchJson(GET('/auth/me', null, tokenValue))
    setAuthToken(tokenValue)
    return { status: "success", data }
  } catch (error) {
    return { status: "error" }
  }
}

export const login = async (params: { [name: string]: any }) => {
  try {
    const { data } = await fetchJson(POST('/auth/login', params))
    setAuthToken(data.token)
    setCookies(data.token)
    return { message: data.message }
  } catch (error: any) {
    return { status: "error", message: error.message }
  }
}

export const logout = async () => {
  try {
    await fetchJson(DELETE('/v1/admins/auth/logout'))
  } catch (error) { }
  removeCookie()
  removeAuthToken()
}


