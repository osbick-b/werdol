

const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/werdol` // is this the thing thats wrong??
);

// =============================================================================
// LOGIN 
// =============================================================================

module.exports.login = (email,username) => {
    return db.query(
        `SELECT id AS user_id, email, username
        FROM users
        WHERE email = $1 AND username = $2`,
        [email, username]
    );
};


module.exports.registerUser = (email, username) => {
    return db.query(
        `INSERT INTO users (email,username)
    VALUES ($1, $2)
    RETURNING id AS user_id, email, username`,
        [email, username]
    );
};


// =============================================================================
// MATCHES
// =============================================================================
module.exports.newMatch = (created_by, ) => {};
