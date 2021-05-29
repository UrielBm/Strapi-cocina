module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 2000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "8dcb056b5dd3d3f7a025435997e30665"),
    },
  },
});
