import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Invalid token");
      req.user = user;
      next();
    });
  } else {
    return res.send(401).json("Not authenticated");
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.params.isAdmin) {
      next();
    } else {
      res.status(403).json("Not authorized");
    }
  });
};
