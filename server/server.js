const express = require("express");
const app = express();

const compression = require("compression");
const path = require("path");


// === Cookie Session Setup === //
const cookieSession = require("cookie-session");
const cookieSessionMiddleware = cookieSession({
    secret: "i'm gay",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: true,
    // secure: true, // --- *** was the cause of the cookie problem
});

// === Sockets Setup === // 
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000")),
});


// =============================================================================
// MIDDLEWARE
// =============================================================================
app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.use(cookieSessionMiddleware);

app.use(express.json()); //? whats the role of this one?

// --- Sockets.io middleware --- // 
io.use(function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

// =============================================================================
// ROUTES
// =============================================================================

// ===== SOCKET ROUTE ===== //
require("./routes/socket-routes")(io);


// ====== STAR ROUTE ===== //
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
    
});

// =============================================================================
// LISTENER
// =============================================================================
server.listen(3001, function () {
    console.log("I'm listening. --- http://localhost:3000");
});
