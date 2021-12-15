module.exports = {
    reactStrictMode: true,
    env: {
        KEYCLOCK_API_URL: process.env.KEYCLOCK_API_URL,
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        GRANT_TYPE: process.env.GRANT_TYPE,
    }
}