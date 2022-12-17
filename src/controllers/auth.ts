import { RouterContext } from '../deps.ts'

class AuthController {
  authEmailPass: (ctx: RouterContext<any>) => Promise<void> = async (ctx) => {
    const body = await ctx.request.body().value
  }
}

const authController: AuthController = new AuthController()
export default authController
