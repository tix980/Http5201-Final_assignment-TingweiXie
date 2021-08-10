// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qualityAssurance: resolve(__dirname, 'qualityAssurance/quality-assurance.html'),
        security: resolve(__dirname, 'security/security.html'),
        badExample: resolve(__dirname, 'badExample/bad-example.html'),
      }
    }
  }
}