
/**
 * Fake API
 */
export const API = {
  get: (nameInLocalstorage: string) => {
    const result = localStorage[nameInLocalstorage]
    return result ? JSON.parse(localStorage[nameInLocalstorage]) : null
  },
  post: (nameInLocalstorage: string, payload: any) => {
    localStorage.setItem(nameInLocalstorage, JSON.stringify(payload))
  }
}