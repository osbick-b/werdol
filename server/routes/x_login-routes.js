const express = require("express");
const router = express.Router();

const db = require("../x_db");

module.exports = router;
// =============================================================================

// --- Register
router.post("/register.json", (req, res) => {
    const { email, username } = req.body;
    return db
        .registerUser(email, username)
        .then(({ rows }) => {
            console.log(`register -- rows[0]`, rows[0]);
            req.session = rows[0];
            return res.json({
                serverSuccess: true,
                user_id: req.session.user_id,
            });
        })
        .catch((err) => {
            console.log("error in register user", err);
            res.json({ serverSuccess: false });
        });
});

// --- Login
router.post("/login", (req, res) => {
    const { username, email } = req.body;
    db.login(email, username)
        .then((resp) => resp.json())
        .then(({ rows }) => {
            console.log(`login -- rows[0]`, rows[0]);
            
        })
        .catch((err) => {
            console.log(`>>> error in login`, err);
        });
});
