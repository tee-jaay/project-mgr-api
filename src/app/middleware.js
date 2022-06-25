import jwt from "jsonwebtoken";

export const verifyLogin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid!")
            } else {
                req.user = user;
                next();
            };
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};