import postgres from "postgres";

const sql = postgres('postgresql://hermes:999@localhost:5432/hermes');

export default sql;