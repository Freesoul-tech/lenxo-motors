export default {
  datasources: {
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/lenxo_motors"
    }
  }
};
