import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {

        let { token } = req.cookies;

        console.log(req.cookies);
        console.log(typeof token);
        console.log(token);

        if (!token) {
            return res.status(401).json({ message: "User not authorized." });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifyToken) {
            return res.status(400).json({ message: "User not found." });
        }

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        return res.status(500).json({ message: `isAuth Error: ${error}` });
    }
}

export default isAuth;