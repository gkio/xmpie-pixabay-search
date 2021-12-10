// eslint-disable-next-line import/no-nodejs-modules
const fs = require('fs')

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/../.swcrc`, 'utf-8'))

module.exports = {
  swcConfig,
}
