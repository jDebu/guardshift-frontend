import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const filterObject = (object = {}, keys = []) => Object.fromEntries(keys.map(key => [key, object[key]]))
export const setItemToLocalStorage = (key, value) => localStorage.setItem(key, value)
export const getItemFromLocalStorage = key => localStorage.getItem(key)
export const getJsonItemFromLocalStorage = key => JSON.parse(getItemFromLocalStorage(key))
export const removeItemFromLocalStorage = keys => keys.map(key => localStorage.removeItem(key))
export const urlSearchParamsData = () => {
  const { search } = useLocation()
  return queryString.parse(search)
}
