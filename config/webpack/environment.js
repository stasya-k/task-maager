const { environment } = require('@rails/webpacker')

environment.loaders.delete('nodeModules');

module.exports = environment
const erb = require('./loaders/erb')
environment.loaders.append('erb', erb)
