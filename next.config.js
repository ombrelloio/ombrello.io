module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });

    return config;
  },
  images: {
    domains: [
      "images.unsplash.com",
      "media.graphassets.com",
      "openweathermap.org",
    ],
    deviceSizes: [150, 300, 640, 750, 828, 1080, 1200, 1680, 2048, 2600, 3840],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256, 300, 384],
  },
};
