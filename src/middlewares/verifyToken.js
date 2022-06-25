import { verifyLogin } from "../app/middleware.js";

export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyLogin(req, res, () => {
    if (req.user.id === req.params.id || req.user.role.type === "admin") {
      next();
    } else {
      res.status(403).json("Unauthorized access!");
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyLogin(req, res, () => {
    if (req.user.role.type === "admin") {
      next();
    } else {
      res.status(403).json("Unauthorized access!");
    }
  });
};
