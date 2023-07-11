const signup = (req, res, next) => {

    res.status(200).json('signup')

}


const login = (req, res, next) => {

    res.status(200).json('login')


}

const verify = (req, res, next) => {

    res.status(200).json('verifyyy')

}


module.exports = {
    signup,
    login,
    verify

}