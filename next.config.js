/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'hips.hearstapps.com',
      'images.immediate.co.uk',
      'iamafoodblog.b-cdn.net',
      'static01.nyt.com',
    ],
  },
}
