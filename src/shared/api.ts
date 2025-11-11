class Api {
  private baseUri: string

  constructor(baseUri: string) {
    this.baseUri = baseUri
  }

  public request<T>(endpoint: string): Promise<T> {
    const headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })

    const BASE_URI = this.baseUri
    const request = new Request(`${BASE_URI}${endpoint}`, {
      headers: headers,
      cache: 'default',
    })
    return fetch(request)
      .then((r): Promise<T> => (r.status <= 207 ? r.json() : Promise.reject(r)))
      .catch((err: unknown) => Promise.reject(err))
  }
}

const api = new Api(import.meta.env.VITE_BASE_URL)

export { api }
