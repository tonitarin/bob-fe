const path = require('path')

const rootPath = path.resolve(__dirname, '.')
const assetsPath = path.resolve(rootPath, 'public')

module.exports = {
  path: {
    dist: path.resolve(rootPath, 'dist'),
    js: path.resolve(assetsPath, 'src'),
    img: path.resolve(assetsPath, 'img'),
    fonts: path.resolve(assetsPath, 'fonts'),
    styles: path.resolve(assetsPath, 'scss'),
  },
}
