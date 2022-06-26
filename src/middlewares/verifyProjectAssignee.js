import { verifyLogin } from "../app/middleware.js";

// TODO: check if user exists in the project assignees array
export const verifyProjectAssinee = (req, res, next) => {
  verifyLogin(req, res, () => {
    if (req.user.id === req.params.id || req.user.role.type === "admin") {
      next();
    } else {
      res.status(403).json("Unauthorized access!");
    }
  });
};
