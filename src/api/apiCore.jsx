import { getJsonItemFromLocalStorage, removeItemFromLocalStorage } from '@/helpers/helpers.jsx'

export const request = async ({ url, ...options }) => {
  const { access_token } = getJsonItemFromLocalStorage('adminData') || {}
  const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${access_token}`,
  }
  const rootUrl = import.meta.env.VITE_API_BASE

  try {
    const response = await fetch(`${rootUrl}${url}`, { ...options, headers })
    if (!response.ok) {
      if (response.status === 400) {
        if (response.non_field_errors) {
          return response.non_field_errors
        } else if (response.message) {
          return response.message
        }
      } else if (response.status === 401) {
        removeItemFromLocalStorage(['adminData'])
        window.location.href = '/'
      }
    }
    const jsonResponse = await response.json()
    if (response.status === 204) {
      return jsonResponse.message || null
    }
    return jsonResponse
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
