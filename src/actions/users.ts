import { GET, fetchJson } from "@/base-api/request"

export const fetchUsers = async (params: any) => {
  try {
    const data = await fetchJson(GET('/users?limit=10', params))

    return data.data
  } catch (error: any) {
    return {
      status: 'error',
      message: error.response.data
    }
  }
}