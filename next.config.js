const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
})
