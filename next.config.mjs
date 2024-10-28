// next.config.js
export default {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }
};
