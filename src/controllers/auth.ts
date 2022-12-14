import { RouterContext } from '../deps.ts'

class AuthController {
  index: (ctx: RouterContext<any>) => any = (ctx) => {
    ctx.response.status = 200
    ctx.response.body = 'Hello world from index'
  }
}

const authController: AuthController = new AuthController()
export default authController
