const { merge } = require("webpack-merge")
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "barick",
        projectName: "app1",
        webpackConfigEnv,
        argv
    })
    
    return merge(defaultConfig, {})
}
