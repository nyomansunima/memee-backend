import { AuthEmailInput, AuthUser } from '../models/auth.ts'

class AuthService {
  authWithEmailPass: (input: AuthEmailInput) => Promise<AuthUser> = async (
    input
  ) => {}
}
const authService: AuthService = new AuthService()
export default authService
