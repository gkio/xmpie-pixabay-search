// craco.config.js
const CracoSwcPlugin = require('craco-swc')
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')
const { swcConfig } = require('./.configs/swcrc.config')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: configPaths('./tsconfig.paths.json') },
    },
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          ...swcConfig,
        },
      },
    },
  ],
}
