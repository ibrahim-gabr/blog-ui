/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "stagingapi.t5ear.com",
      "staging.t5ear.com",
      "staging-storage.t5ear.com",
      "api.t5ear.com",
      "storage.t5ear.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
