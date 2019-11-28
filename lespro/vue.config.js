//https://cli.vuejs.org/ru/config/#publicpath
//https://medium.com/js-dojo/how-to-deal-with-cors-error-on-vue-cli-3-d78c024ce8d3

module.exports = {
  // devServer: {
  //   proxy: 'http://vuecli',
  // },
  publicPath: process.env.NODE_ENV === 'production' ? '/vuecli/' : '/'

}
