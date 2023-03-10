/* eslint-disable */
if (process.env.NODE_ENV === 'development') {
  // require('@likelylogic/vue-devtools/packages/shell-electron').connect(undefined, undefined, { log: false })
  // require('@likelylogic/vue-devtools/packages/shell-electron').connect(undefined, undefined, { log: false })
  require('@vue/devtools').connect(/* host, port */)
}
