// vite.config.js
import {resolve} from 'path';
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        qualityAssurance: resolve('qualityAssurance/quality-assurance.html'),
        security: resolve('security/security.html'),
        badExample: resolve('badExample/bad-example.html'),
      }
    }
  }
}