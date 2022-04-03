
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS matches;



-- new users table
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    VARCHAR NOT NULL UNIQUE,
    email       VARCHAR NOT NULL UNIQUE,
    profile_pic VARCHAR,
);


-- new matches table
CREATE TABLE matches (
    id            SERIAL PRIMARY KEY,
    created_by    INTEGER NOT NULL REFERENCES users(id),
    word_length   INTEGER NOT NULL,
    player1       INTEGER NOT NULL REFERENCES users(id),
    player2       INTEGER REFERENCES users(id),
    player3       INTEGER REFERENCES users(id),
    player4       INTEGER REFERENCES users(id),
    timestamp     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);