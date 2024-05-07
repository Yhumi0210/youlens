module.exports = function override(config) {
    // Faire quelque chose avec la configuration de Webpack...
    config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    })

    return config
}