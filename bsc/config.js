const dotenv = require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '967955c8766e07c54fb1b741503b96e863b77450bb937adb3ec27dc5ae07e9f0',
  HOST: process.env.HOST || 'http://localhost:7545',
}