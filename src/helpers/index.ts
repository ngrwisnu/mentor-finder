export const getDataFromStorage = (key: string) => {
  const requests = sessionStorage.getItem(key)

  if (typeof requests === 'string') {
    return JSON.parse(requests as string)
  }

  return requests
}

export const setDataToStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value)
}
