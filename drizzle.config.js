/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:nuy6l0PqIEcv@ep-round-term-a5wb15ea.us-east-2.aws.neon.tech/AI%20Interview%20Mocker?sslmode=require",
  },
};
