const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // { userAgent: '*', disallow: '/' },
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
