// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
const products = require('./src/helpers/product.json');
//import ProductPage from './src/pages/product/sample';
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  products.forEach((product) => {
    createPage({
      path: `/product/${product.link}`,
      component: require.resolve(`./src/pages/product/sample.js`),
      context: {
        sampleProduct: product
      }
    })
  })
}