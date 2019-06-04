const jwt = require('jsonwebtoken');
const GlobalModel = require('@model/index');
const User = GlobalModel.users;
const Teacher = GlobalModel.teachers;

class AuthMiddleware {
    
    getUser(Request, Response, next) {
        if(!Request.headers.authorization) {
            next();
            return;
        }
        let token = Request.headers.authorization;
        token = token.replace('Bearer ','');

        jwt.verify(token, process.env.JWT_SECRET, function(Error, Decoded) {
            if(!Error) {
                User.findById(Decoded.id).then(user => {
                    if(user) {
                        Request.auth = {
                            id: user.id,
                            email: user.email,
                            name: user.name
                        }
                        next()
                    } else {
                        Teacher.findById(Decoded.id).then((teacher) => {
                            if(teacher) {
                                Request.auth = {
                                    id: teacher.id,
                                    name: teacher.name,
                                    type: 'teacher'
                                }
                                next()
                            } else {
                                Response.status(400).send({success: false, message: 'Wrong token'})
                            }
                        })
                    }
                })
            } else {
                Response.status(400);
                Response.send(Error)
            }
        })
    }
    auth(Request, Response, next) {

        if(!Request.headers.authorization) {
            Response.status(403).send('Unauthorized')
            return;
        }

        let token = Request.headers.authorization;
        token = token.replace('Bearer ','');

        jwt.verify(token, process.env.JWT_SECRET, function(Error, Decoded) {
            if(!Error) {
                User.findById(Decoded.id).then(user => {
                    if(user) {
                        Request.auth = {
                            id: user.id,
                            email: user.email,
                            name: user.name
                        }
                        next()
                    } else {
                        Response.status(400);
                        Response.send('This user does not exists')
                    }
                })
            } else {
                console.log(Error);
                Response.status(400);
                Response.send(Error)
            }
        })
    }
}

module.exports = new AuthMiddleware();
    