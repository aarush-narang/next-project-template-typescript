// https://www.npmjs.com/package/next-sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
        process.env.NODE_ENV === 'production' ? 'https://www.example.com' : 'http://localhost:3000',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
