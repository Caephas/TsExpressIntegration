import { Router, Request, Response, NextFunction } from "express"
import { get } from './decorators/routes'


@controller('/')
class LoginController{
    @get('/login')
    getLogin(req: Request, res: Response) {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"/>
            </div>
            <button>Submit</button>
        </form>
    `)
}
}