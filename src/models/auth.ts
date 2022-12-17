export interface AuthEmailInput {
  email: string
  password: string
}

export interface AuthUser {
  token: string
  user: {
    id: string
    email: string
    role: string
  }
}
