require('postcss-preset-env')({
  stage: 3,
  browsers: 'last 2 versions'
})

module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR', 'not dead']
    })
  ]
}