const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                detail: resolve(__dirname, 'detail.html'),
                produce: resolve(__dirname, 'produce.html'),
                signin: resolve(__dirname, 'signin.html'),
                signup: resolve(__dirname, 'signup.html'),
            }
        }
    }
})