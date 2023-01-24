import User from "../../../../models/user/auth/User.model.js";

export default async function () {
    return await User.find(
        {},
        { id: 1, name: 1, email: 1, role: 1, profile: 1, _id: 0 }
    ).limit(5);
}