module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    // require('postcss-cssnext')({}),
    require('lost')(),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
}