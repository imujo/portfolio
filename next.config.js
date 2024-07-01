const { withPayload } = require('@payloadcms/next/withPayload')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["localhost", "res.cloudinary.com"] },
};

module.exports = withPayload(nextConfig);
