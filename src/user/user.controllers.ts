import { Request, Response } from "express";
import userServices from "./user.services";

class UserController {
    constructor() { }

    get(req: Request, res: Response) {
        let users = null
        if (req.params.username !== undefined) {
            users = userServices.getUser({ username: req.params.username })
        } else {
            users = userServices.getAllUsers()
        }
        res.json({
            data: users
        })
    }

    add(req: Request, res: Response) {
        const { username, name } = req.body
        const user = userServices.addUser({ username, name })
        return res.json({
            data: user
        })
    }

}

export default new UserController()