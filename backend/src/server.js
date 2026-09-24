import "dotenv/config";
import app from "./app.js";
import pool from "./config/database.js";

const PORT = process.env.PORT || 5000;
const startserver = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("postgres connected successfully");
        console.log("Database Time:", result.rows[0].now);


app.listen(PORT, () => {console.log(`Xp Technologies API is running on port ${PORT}`)});

    } catch (error) {
        console.error("Postgres connection failed:", error.message);
    }
};

startserver();