import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}
export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}



export const createJWT = (user) => {

    let token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET)

    return token
}

export const protect = (req, res, next) => {
    const bearar = req.headers.authorization

    if (!bearar) {
        res.status(401)
        res.json({ message: 'no authorized' })
        return;
    }

    const [, token] = bearar.split(' ')

    if (!token) {
        res.status(401)
        res.json({ message: 'not valid authorized' })
        return;
    }
    try {


        const user = jwt.verify(token, process.env.JWT_SECRET)
        console.log(user, 'user')
        req.user = user
        next()
    } catch (error) {
        console.error(error)
        res.status(401)
        res.json({ message: 'not valid authorized' })
        return;
    }
}

