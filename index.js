const path = require('path')

const serve = require('serve')

serve(path.join(__dirname, 'public'), {
  port: process.env.PORT || 1337
})
