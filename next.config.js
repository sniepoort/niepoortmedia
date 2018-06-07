module.exports = {
  webpack: function (config) {
    config.module.loaders = (config.module.loaders || []).concat({
      test: /\.css$/, loader: 'raw'
    })
    return config
  }
}
