const withBuilderDevTools = require('@builder.io/dev-tools/next')()

module.exports = withBuilderDevTools({
    images: {
        domains: ['shopify.com', 'cdn.shopify.com'],
    },
})
