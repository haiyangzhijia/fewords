var File = require('../file/file')
var path = require('path')

var userHomePath = process.env.HOME || process.env.USERPROFILE
var configPath = path.join(userHomePath, '.fewords-config.json')

var configFile = new File(configPath, {
    dataPath: path.join(userHomePath, 'Documents'),
    globalKey: {}
})

module.exports = configFile


