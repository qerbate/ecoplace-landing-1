//check env.
var env = process.env.Node_ENV || 'development';
//fetch env.config
var config = require('./config.json');
var envConfig = config[env];
// add env.Config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);