require('./box-creator')

console.log('I just reloaded at:', new Date())

if (module.hot) {
  module.hot.accept()
}
