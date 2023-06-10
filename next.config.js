/* eslint-disable max-len */
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#005E9D', '@default-color': '#008DEB' }, // optional
  // lessVarsFilePath: "./src/styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: 'local',
    localIdentName: '[hash:base64:8]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: 'camelCase',
    exportOnlyLocals: false,
    // ...
    getLocalIdent: () => {
      return
    }
  },

  // Other Config Here...

  images: {
    domains: ['https://zos.alipayobjects.com']
  },

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },

  webpack(config) {
    // config svgr
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
})
