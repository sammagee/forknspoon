export interface Error {
  response: {
    data: {
      errors: string[]
    }
    status: number
  }
}
