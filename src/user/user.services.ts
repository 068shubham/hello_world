import userDao, { User } from "./user.dao";

class UserService {
    constructor() { }

    getAllUsers() {
        return userDao.getAll()
    }

    getUser({ username }: { username: string }) {
        return userDao.getByUsername(username)
    }

    addUser({ username, name }: User) {
        return userDao.add({ username, name })
    }

}

export default new UserService()