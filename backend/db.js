/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client(
    process.env.DATABASE_URL ||
    "postgresql://postgres:MTasXgD9@localhost/microblog"
);

client.connect();


module.exports = client;
