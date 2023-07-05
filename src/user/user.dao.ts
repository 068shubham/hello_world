import fs from 'fs'
export type User = { id?: number, username: string, name: string }

class DuplicateUserException extends Error {
    constructor(message: string) {
        super(message)
    }
}

class UserDao {
    static users: Array<User> = []
    fileName: string
    constructor() {
        const fileName = "data/users.json"
        this.fileName = fileName
        if (fs.existsSync(fileName))
            UserDao.users = JSON.parse(fs.readFileSync(fileName, { encoding: "utf-8" }))
    }

    getAll() {
        return UserDao.users
    }

    getById(id: number) {
        return UserDao.users.find(u => u.id === id)
    }

    getByUsername(username: string) {
        return UserDao.users.find(u => u.username === username)
    }

    add(user: User) {
        if (this.getByUsername(user.username) === undefined) {
            user.id = UserDao.users.length
            UserDao.users.push(user)
            fs.writeFileSync(this.fileName, JSON.stringify(UserDao.users))
            return user
        } else {
            throw new DuplicateUserException(`User with username ${user.username} already exists`)
        }
    }

}

export default new UserDao()