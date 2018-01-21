module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactImageGalleryGrid',
      externals: {
        react: 'React'
      }
    }
  }
}
